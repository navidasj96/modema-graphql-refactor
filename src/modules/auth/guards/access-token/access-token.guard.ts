import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';
import { REQUEST_USER_KEY } from '@/modules/auth/constant/auth.constant';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ActiveUserData } from '@/modules/auth/interfaces/active-user-data.interface';
import { AuthService } from '@/modules/auth/auth.service';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    /**
     * inject jwtService
     */
    private readonly jwtService: JwtService,
    /**
     * inject jwtConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    /**
     * inject authService
     */
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //Extract the request form the execution context
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    //Extract the token from header
    const token = this.extractRequestFromHeader(request);

    //validate the token
    if (!token) {
      throw new UnauthorizedException('Unauthorized');
    }

    try {
      const payload = (await this.jwtService.verifyAsync(
        token,
        this.jwtConfiguration,
      )) as ActiveUserData;

      // add the payload to Request body to be able to grab the user in any controller by this
      request[REQUEST_USER_KEY] = payload;
      const permisions = await this.authService.getUserPermissions(payload.sub);
      // console.log('permisions', permisions);
      request[REQUEST_USER_KEY].permissions = 'Amir';

      // console.log('request', request.user.sub);
    } catch (error) {
      // if (error.name === 'TokenExpiredError') {
      //   throw new UnauthorizedException('Token has expired');
      // }

      throw new UnauthorizedException('Unauthorized');
    }

    return true;
  }

  private extractRequestFromHeader(request: Request): string | undefined {
    // const [_, token] = request.headers.authorization?.split(' ') ?? [];
    const token = request.cookies['access_token'];
    return token;
  }
}
