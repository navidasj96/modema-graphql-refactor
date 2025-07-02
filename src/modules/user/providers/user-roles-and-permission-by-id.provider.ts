import { User } from '@/modules/user/entities/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRolesAndPermissionByIdProvider {
  constructor(
    /**
     * inject userRepository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findRolesAndPermissionsById(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: {
        userHasPermission: {
          permission: true,
        },
        userHasRole: {
          role: {
            roleHasPermission: {
              permission: true,
            },
          },
        },
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    //roles and permissions of the user
    const userPermission = user.userHasPermission;
    const userRoles = user.userHasRole;
    const rolesName = userRoles.map((role) => role.role.name);
    //extract name of every permissions of the roles assigned to the user
    const rolePermissionsNameArray = userRoles.map((userRole) => {
      return userRole.role.roleHasPermission.map(
        (perm) => perm.permission.name
      );
    });

    //extract permissions assign to the user
    const permissionsNameArray = userPermission.map(
      (perm) => perm.permission.name
    );

    return {
      permissions: [
        ...new Set([
          ...rolePermissionsNameArray.flat(),
          ...permissionsNameArray,
        ]),
      ],
      roles: rolesName,
    };
  }
}
