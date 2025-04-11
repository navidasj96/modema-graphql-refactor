// src/modules/auth/services/permission-helper.service.ts
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class PermissionHelperService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async userHasPermissions(
    userId: number,
    required: string[],
  ): Promise<boolean> {
    const user = await this.userService.findOneById(userId);
    if (!user) return false;

    const rolePermissions = user.userHasRole.flatMap(
      (ur) => ur.role?.permissions?.map((p) => p.name) || [],
    );

    const directPermissions = user.userHasPermission.map(
      (up) => up.permission?.name,
    );

    const allPermissions = [
      ...new Set([...rolePermissions, ...directPermissions]),
    ];

    return required.every((p) => allPermissions.includes(p));
  }
}
