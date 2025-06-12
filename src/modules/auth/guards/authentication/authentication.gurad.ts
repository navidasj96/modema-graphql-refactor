import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { AuthType } from '@/modules/auth/enums/app-type.enum';
import { AUTH_TYPE_KEY } from '@/modules/auth/constant/auth.constant';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly defaultAuthType = AuthType.Bearer;
  private readonly authTypeGuardMap: Record<
    AuthType,
    CanActivate | CanActivate[]
  >;

  constructor(
    /**
     * Inject reflector for accessing the metadatas that are set by SetMetadata
     *
     */
    private readonly reflector: Reflector,
    /**
     * inject accessTokenGuard
     */
    private readonly accessTokenGuard: AccessTokenGuard
  ) {
    this.authTypeGuardMap = {
      [AuthType.Bearer]: this.accessTokenGuard,
      [AuthType.None]: { canActivate: () => true },
    };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //authTypes from reflector to grab metadata
    const authTypes = this.reflector.getAllAndOverride(AUTH_TYPE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]) ?? [AuthenticationGuard.defaultAuthType];

    //array of guards
    const guards: CanActivate[] = authTypes
      .map((type) => this.authTypeGuardMap[type])
      .flat();
    //loop guards canActivate
    // if we have 1 None the controller will become public even if it has a Bearer metaData
    for (const guard of guards) {
      const canActivate = await Promise.resolve(
        guard.canActivate(context)
      ).catch((err) => {});

      if (canActivate) {
        return true;
      }
    }

    throw new UnauthorizedException('not authenticated');
  }
}
