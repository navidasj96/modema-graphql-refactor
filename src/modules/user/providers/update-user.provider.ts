import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';
import { UpdateUserInput } from '@/modules/user/dto/update-user.input';

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

  public async updateUser(updateUserInput: UpdateUserInput, id: number) {
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
      await this.userRepository.update(user.id, {
        ...(updateUserInput.name && { name: updateUserInput.name }),
        ...(updateUserInput.email && { email: updateUserInput.email }),
        ...(updateUserInput.username && { username: updateUserInput.username }),
        ...(updateUserInput.phone && { phone: updateUserInput.phone }),
        ...(updateUserInput.isActive && { isActive: updateUserInput.isActive }),
        ...(updateUserInput.isGuest && { isGuest: updateUserInput.isGuest }),
        ...(updateUserInput.sepidarCode && {
          sepidarCode: updateUserInput.sepidarCode,
        }),
        ...(updateUserInput.sepidarId && {
          sepidarId: updateUserInput.sepidarId,
        }),
        ...(updateUserInput.phoneVerified && {
          phoneVerified: updateUserInput.phoneVerified,
        }),
        ...(updateUserInput.password && {
          password: await this.hashingProvider.hashPassword(
            updateUserInput.password,
          ),
        }),
        ...(updateUserInput.isPreorderApplicant && {
          isPreorderApplicant: updateUserInput.isPreorderApplicant,
        }),
      });
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
    return { id: user.id, name: user.name };
  }
}
