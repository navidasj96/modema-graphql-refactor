// src/authorizers/sub-task-authorizer.factory.ts

import { ForbiddenException, Injectable } from '@nestjs/common';
import { CustomAuthorizer } from '@ptc-org/nestjs-query-graphql';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { RolePermissions } from '@/utils/permissions';

export function PermissionsAuthorizer(
  permission: string[],
): new () => CustomAuthorizer<any> {
  @Injectable()
  class SubTaskAuthorizerWithPermission implements CustomAuthorizer<any> {
    async authorize(context: { req: UserContext }): Promise<any> {
      const user = context.req.user;
      console.log('user', user);
      const hasPermissions = permission.every((p) =>
        RolePermissions.PERMISSION_TO_VIEW.includes(p),
      );
      if (hasPermissions) {
        return Promise.resolve();
      }
      throw new ForbiddenException('Permission denied');
    }
  }

  return SubTaskAuthorizerWithPermission;
}
