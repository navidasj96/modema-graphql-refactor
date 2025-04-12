import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UpdateUserDto } from '@/modules/user/dto/update-user.dto';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';

@Injectable()
export class UpdateUserProvider {
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

  public async updateUser(updateUserDto: UpdateUserDto, id: number) {
    let user: User | null = null;

    //check if user exists

    try {
      user = await this.userRepository.findOne({
        where: { id: id },
      });
    } catch {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (!user) {
      throw new RequestTimeoutException('user does not exists', {
        description: 'user does not exists',
      });
    }

    try {
      if (updateUserDto.password) {
      }
      await this.userRepository.update(user.id, {
        name: updateUserDto.name,
        ...(updateUserDto.email && { email: updateUserDto.email }),
        ...(updateUserDto.username && { username: updateUserDto.username }),
        ...(updateUserDto.phone && { phone: updateUserDto.phone }),
        ...(updateUserDto.isActive && { isActive: updateUserDto.isActive }),
        ...(updateUserDto.isGuest && { isGuest: updateUserDto.isGuest }),
        ...(updateUserDto.sepidarCode && {
          sepidarCode: updateUserDto.sepidarCode,
        }),
        ...(updateUserDto.sepidarId && { sepidarId: updateUserDto.sepidarId }),
        ...(updateUserDto.phoneVerified && {
          phoneVerified: updateUserDto.phoneVerified,
        }),
        ...(updateUserDto.password && {
          password: await this.hashingProvider.hashPassword(
            updateUserDto.password,
          ),
        }),
      });
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
    return { message: 'user updated successfully' };
  }
}
