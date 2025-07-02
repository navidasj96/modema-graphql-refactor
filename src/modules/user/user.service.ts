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
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { PermissionService } from '@/modules/permission/permission.service';
import { RoleService } from '@/modules/role/role.service';
import { CreateUserProvider } from '@/modules/user/providers/create-user.provider';
import { UpdateUserProvider } from '@/modules/user/providers/update-user.provider';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { UserTransactionListProvider } from '@/modules/user/providers/user-transaction-list.provider';
import { UserRolesAndPermissionByIdProvider } from '@/modules/user/providers/user-roles-and-permission-by-id.provider';

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
    /**
     * inject createUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,
    /**
     * inject updateUserProvider
     */
    private readonly updateUserProvider: UpdateUserProvider,
    /**
     * inject userTransactionListProvider
     */
    private readonly userTransactionListProvider: UserTransactionListProvider,
    /**
     * inject userRolesAndPermissionByIdProvider
     */
    private readonly userRolesAndPermissionByIdProvider: UserRolesAndPermissionByIdProvider
  ) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(options: FindOneOptions<User>) {
    return await this.userRepository.findOne(options);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async find(options: FindManyOptions<User>) {
    return await this.userRepository.find(options);
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
        }
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
        }
      );
    }

    //handle user does not exist exception
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    return user;
  }

  async findRolesAndPermissionsById(userId: number) {
    return await this.userRolesAndPermissionByIdProvider.findRolesAndPermissionsById(
      userId
    );
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDto);
  }

  async updateUser(updateUserInput: UpdateUserInput, id: number) {
    return await this.updateUserProvider.updateUser(updateUserInput, id);
  }

  async userTransactionList(userId: number) {
    return await this.userTransactionListProvider.userTransactionList(userId);
  }
}
