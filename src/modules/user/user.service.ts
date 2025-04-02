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
}
