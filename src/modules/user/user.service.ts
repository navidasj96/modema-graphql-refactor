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
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.userHasPermission', 'userHasPermission')
      .leftJoinAndSelect('userHasPermission.permission', 'permission')
      .leftJoinAndSelect('user.userHasRole', 'userHasRole')
      .leftJoinAndSelect('userHasRole.role', 'role')
      .leftJoinAndSelect('role.roleHasPermission', 'roleHasPermission')
      .leftJoinAndSelect('roleHasPermission.permission', 'rolePermission')
      .where('user.id = :id', { id: userId })
      .select([
        'user.id',
        'userHasPermission.permissionId',
        'permission.name',
        'userHasRole.roleId',
        'role.id',
        'roleHasPermission.permissionId',
        'rolePermission.name',
      ])
      .getOne();

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    //roles and permissions of the user
    const userPermission = user.userHasPermission;
    const userRoles = user.userHasRole;

    // console.log(
    //   'userRoles',
    //   userRoles.map((roles) =>
    //     roles.role.roleHasPermission.map((roles2) => roles2.permission.name),
    //   ),
    // );
    //extract name of every permissions of the roles assigned to the user
    const rolePermissionsNameArray = userRoles.map((userRole) => {
      return userRole.role.roleHasPermission.map(
        (perm) => perm.permission.name,
      );
    });

    //extract permissions assign to the user
    const permissionsNameArray = userPermission.map(
      (perm) => perm.permission.name,
    );

    // console.log('rolePermissionsNameArray', rolePermissionsNameArray.flat());
    // console.log('permissionsNameArray', permissionsNameArray);
    return [
      ...new Set([...rolePermissionsNameArray.flat(), ...permissionsNameArray]),
    ];
  }
}
