import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from '../dtos/sigin.dto';
import { HashingProvider } from './hashing.provider';
import { GenerateTokenProvider } from './generate-token.provider';
import { UserService } from '@/modules/user/user.service';
import { Response } from 'express';
import { TokensName } from '@/modules/auth/enums/tokens-name.enum';
import { SingInReturnInterface } from '@/modules/auth/interfaces/sing-in-return.interface';

@Injectable()
export class SignInProvider {
  constructor(
    /**
     * Inject userService
     */
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    /**
     * Inject HashingProvider
     */
    private readonly hashingProvider: HashingProvider,
    /**
     * Inject generateTokenProvider
     */
    private readonly generateTokenProvider: GenerateTokenProvider,
  ) {}

  public async signIn(
    signInDto: SignInDto,
    res: Response,
  ): Promise<SingInReturnInterface> {
    //find user by email
    let user = await this.usersService.findUserByUsername(signInDto.username);

    //compare passwords
    let isEqual: boolean = false;
    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password ?? '',
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Error comparing password',
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException('Incorrect password');
    }

    const { refreshToken, accessToken } =
      await this.generateTokenProvider.generateTokens(user);

    res.cookie(TokensName.access_token, accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });
    res.cookie(TokensName.refresh_token, refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });
    return { id: user.id, username: user.name };
  }
}
