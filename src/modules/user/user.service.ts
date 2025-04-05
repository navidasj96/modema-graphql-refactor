import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ActivityService } from '@/modules/activity/activity.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { Repository } from 'typeorm';
import { PermissionService } from '@/modules/permission/permission.service';
import { RoleService } from '@/modules/role/role.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => ActivityService))
    private readonly activityService: ActivityService,
    /**
     * inject userRepository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * inject permissionService
     */
    private readonly permissionService: PermissionService,
    /**
     * inject roleService
     */
    private readonly roleService: RoleService,
  ) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  test() {
    return this.activityService.getActivityWithUser(1);
  }

  async findUserByUsername(username: string) {
    let user: User | null = null;
    try {
      user = await this.userRepository.findOne({
        where: { phone: username },
      });
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'could not find user',
      });
    }
    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }
    return user;
  }

  async updateUsersPassword(user: User, password: string) {
    try {
      await this.userRepository.update(user.id, { password: password });
    } catch (err) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    return true;
  }

  public async findOneById(id: number) {
    let user: User | null = null;
    try {
      user = await this.userRepository.findOneBy({
        id,
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    //handle user does not exist exception
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    return user;
  }

  async findRolesAndPermissionsById(userId: number) {
    //total permissions and roles available in database
    const totalPermissions = await this.permissionService.findAllBasic();
    const totalRoles = await this.roleService.findAllWithPermissions();

    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userHasPermission', 'userHasRole'],
      select: {
        id: true,
        userHasPermission: {
          permissionId: true,
        },
        userHasRole: {
          roleId: true,
        },
      },
    });
    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    //roles and permissions of the user
    const userPermission = user.userHasPermission;
    const userRoles = user.userHasRole;

    //extract name of every permissions of the roles assigned to the user
    const rolePermissionsNameArray = userRoles.map((userRole) => {
      const rolePermissions = totalRoles.find(
        (role) => role.id === userRole.roleId,
      );
      return rolePermissions?.permissions.map((role) => role.name);
    });

    //extract permissions assign to the user
    const permissionsNameArray = userPermission.map((perm) => {
      return totalPermissions.find((totalPerm) => {
        return totalPerm.id === perm.permissionId;
      })?.name;
    });

    return [
      ...new Set([...rolePermissionsNameArray.flat(), ...permissionsNameArray]),
    ];
  }
}
