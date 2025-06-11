import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UserService } from '@/modules/user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPermissionCheckProvider {
  constructor(
    /**
     * inject userService
     */
    private readonly userService: UserService
  ) {}
  async userPermissionCheck(
    requestedPermissions: string[],
    context?: { req: UserContext },
    userIdInput?: number
  ) {
    let userId: number | null = null;

    if (context) {
      const { req } = context;
      const { user } = req;
      userId = user.sub;
    } else if (userIdInput) {
      userId = userIdInput;
    } else {
      return false;
    }

    // Fetch user permissions from the auth service
    const userPermissions =
      await this.userService.findRolesAndPermissionsById(userId);

    const { permissions: totalUserPermission } = userPermissions;

    // Check if the user has all requested permissions
    const hasAllPermissions = requestedPermissions.every((permission) =>
      totalUserPermission.includes(permission)
    );

    return hasAllPermissions;
  }
}
