// src/authorizers/sub-task-authorizer.factory.ts

import { ForbiddenException, Injectable } from '@nestjs/common';
import { CustomAuthorizer } from '@ptc-org/nestjs-query-graphql';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

export function PermissionsAuthorizer(
  permission: string[],
): new () => CustomAuthorizer<any> {
  @Injectable()
  class SubTaskAuthorizerWithPermission implements CustomAuthorizer<any> {
    async authorize(context: { req: UserContext }): Promise<any> {
      const user = context.req.user;
      const permissions = context.req.user.permissions;

      if (!permissions) {
        throw new ForbiddenException('Permission denied');
      }
      const hasPermissions = permission.every((p) => permissions.includes(p));
      if (hasPermissions) {
        return Promise.resolve();
      }
      throw new ForbiddenException('Permission denied');
    }
  }

  return SubTaskAuthorizerWithPermission;
}
