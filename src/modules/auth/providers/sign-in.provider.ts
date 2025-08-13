import jwtConfig from '@/modules/auth/config/jwt.config';
import { TokensName } from '@/modules/auth/enums/tokens-name.enum';
import { SingInReturnInterface } from '@/modules/auth/interfaces/sing-in-return.interface';
import { SignInOtpGeneratorService } from '@/modules/auth/providers/sign-in-otp-generator.service';
import { ExternalApiService } from '@/modules/external-api/external-api.service';
import { UserService } from '@/modules/user/user.service';
import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Response } from 'express';
import { SignInDto } from '../dtos/sigin.dto';
import { GenerateTokenProvider } from './generate-token.provider';
import { HashingProvider } from './hashing.provider';

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
    /**
     * inject jwtConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    /**
     * inject externalApiService
     */
    private readonly externalApiService: ExternalApiService,
    /**
     * inject signInOtpGeneratorService
     */
    private readonly signInOtpGeneratorService: SignInOtpGeneratorService
  ) {}

  public async signIn(
    signInDto: SignInDto,
    res: Response
  ): Promise<SingInReturnInterface> {
    //find user by email
    const user = await this.usersService.findUserByUsername(signInDto.username);
    //compare passwords

    let isEqual: boolean = false;
    try {
      if (user.nestPanelLoggedIn == 1) {
        isEqual = await this.hashingProvider.comparePassword(
          signInDto.password,
          user.password ?? ''
        );
      } else {
        const apiRes = await this.externalApiService.checkPasswordWithPhp({
          username: signInDto.username,
          password: signInDto.password,
        });
        if (apiRes.success) {
          const setUserPasswordFromPhpPanel =
            await this.signInOtpGeneratorService.otpGeneratorAndSetter(
              signInDto.username,
              signInDto.password
            );

          if (setUserPasswordFromPhpPanel) {
            const changedPasswordUser =
              await this.usersService.findUserByUsername(signInDto.username);
            const updatedUser = await this.usersService.update({
              id: changedPasswordUser.id,
              nestPanelLoggedIn: 1,
            });

            if (updatedUser) {
              isEqual = true; // Password is set, so we consider it equal
            }
          }
        }
      }
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Error comparing password',
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException('Credentials are not valid');
    }

    const { refreshToken, accessToken } =
      await this.generateTokenProvider.generateTokens(user);

    res.cookie(TokensName.access_token, accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: this.jwtConfiguration.accessTokenTtl,
    });
    res.cookie(TokensName.refresh_token, refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: this.jwtConfiguration.refreshTokenTtl,
    });
    return { id: user.id, username: user.name };
  }
}
