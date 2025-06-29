import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { Request, Response } from 'express';
import { Auth } from '@/modules/auth/decorators/auth.decorators';
import { AuthType } from '@/modules/auth/enums/app-type.enum';
import { SignInDto } from '@/modules/auth/dtos/sigin.dto';
import { RefreshTokenDto } from '@/modules/auth/dtos/refresh-token.dto';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Auth(AuthType.None)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      const { username, id } = await this.authService.signIn(signInDto, res);
      return { username, id };
    } catch (error) {
      throw new RuntimeException(`Error signing in:${error}`);
    }
  }

  @Auth(AuthType.None)
  @Post('refresh-tokens')
  @HttpCode(HttpStatus.OK)
  public async refreshTokens(
    @Body() refreshTokenDto: RefreshTokenDto,
    @Res({ passthrough: true }) res: Response,
    @Req() request: Request
  ) {
    const refreshTokenFromReq = request.cookies.refresh_token;

    try {
      await this.authService.refreshTokens(
        {
          refreshToken: refreshTokenFromReq,
        },
        res
      );
    } catch {
      throw new RuntimeException('Error signing in');
    }

    return { message: 'tokens generated successfully' };
  }

  @Auth(AuthType.None)
  @Post('signIn-otp')
  async siginInOtp(@Body() body: { username: string }) {
    return await this.authService.signInOtp(body.username);
  }
}
