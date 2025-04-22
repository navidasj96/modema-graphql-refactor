import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PERMISSIONS_KEY } from '@/utils/permission-guard/permissions.decorator';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true;
    }

    const ctx: { req: UserContext } =
      GqlExecutionContext.create(context).getContext();
    const user = ctx.req.user;

    if (!user || !user.permissions) {
      throw new ForbiddenException('Permission denied.');
    }

    const hasAllPermissions = requiredPermissions.every(
      (permission) => user.permissions && user.permissions.includes(permission),
    );

    if (!hasAllPermissions) {
      throw new ForbiddenException('Permission denied.');
    }

    return true;
  }
}
