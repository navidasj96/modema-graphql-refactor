import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    /**
     * Inject userRepository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * Inject hashingProvider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    //check if user already exists
    let user: User | null = null;
    try {
      const user = await this.userRepository.findOne({
        where: [
          ...(createUserDto.email ? [{ email: createUserDto.email }] : []),
          ...(createUserDto.username
            ? [{ username: createUserDto.username }]
            : []),
        ],
      });
    } catch {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (user) {
      throw new RequestTimeoutException('user already exists', {
        description: 'user already exists',
      });
    }

    let newUser = this.userRepository.create({
      name: createUserDto.name,
      ...(createUserDto.email && { email: createUserDto.email }),
      ...(createUserDto.username && { username: createUserDto.username }),
      ...(createUserDto.phone && { phone: createUserDto.phone }),
      ...(createUserDto.isActive && { isActive: createUserDto.isActive }),
      tempName: createUserDto.name,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });

    try {
      newUser = await this.userRepository.save(newUser);
    } catch (error) {
      console.log('error', error);
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    return { id: newUser.id, name: newUser.name, username: newUser.username };
  }
}
