import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Repository } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * inject hashingProvider
     */
    private readonly hashingProvider: HashingProvider,
  ) {
    super();
  }

  public async validate(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: [{ username }, { phone: username }],
    });
    if (!user) {
      this.logger.debug(`user ${username} not found`);
      throw new UnauthorizedException();
    }

    if (
      !(await this.hashingProvider.comparePassword(
        password,
        user.password ?? '',
      ))
    ) {
      this.logger.debug(`invalid credentials`);

      throw new UnauthorizedException();
    }

    return user;
  }
}
