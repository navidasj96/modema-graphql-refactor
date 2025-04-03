import { Injectable } from '@nestjs/common';
import { SignInOtpGeneratorService } from '@/modules/auth/providers/sign-in-otp-generator.service';
import { UserService } from '@/modules/user/user.service';
import { SignInProvider } from '@/modules/auth/providers/sign-in.provider';
import { RefreshTokensProvider } from '@/modules/auth/providers/refresh-tokens.provider';
import { SignInDto } from '@/modules/auth/dtos/sigin.dto';
import { RefreshTokenDto } from '@/modules/auth/dtos/refresh-token.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    /**
     * Inject signInProvider
     */
    private readonly signInProvider: SignInProvider,
    /**
     * Inject refreshTokensProvider
     */
    private readonly refreshTokensProvider: RefreshTokensProvider,
    /**
     * inject signInInOtpGenerator
     */
    private readonly signInInOtpGenerator: SignInOtpGeneratorService,
  ) {}

  public async signIn(singInDto: SignInDto, res: Response) {
    //find the user using email ID
    //throw exception user not found
    return await this.signInProvider.signIn(singInDto, res);
  }

  public async refreshTokens(refreshTokenDto: RefreshTokenDto, res: Response) {
    return await this.refreshTokensProvider.refreshTokens(refreshTokenDto, res);
  }

  public async signInOtp(username: string) {
    return await this.signInInOtpGenerator.otpGeneratorAndSetter(username);
  }
}
