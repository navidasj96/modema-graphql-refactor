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

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Auth(AuthType.None)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, accessToken } =
      await this.authService.signIn(signInDto);
    // const token = this.authService.getTokenForUser(user);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });

    return true;
  }

  @Auth(AuthType.None)
  @Post('refresh-tokens')
  @HttpCode(HttpStatus.OK)
  public async refreshTokens(
    @Body() refreshTokenDto: RefreshTokenDto,
    @Res({ passthrough: true }) res: Response,
    @Req() request: Request,
  ) {
    const refreshTokenFromReq = request.cookies.refresh_token;
    const { refreshToken, accessToken } = await this.authService.refreshTokens({
      refreshToken: refreshTokenFromReq,
    });
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 8000 * 60 * 60, // 8 hour
    });

    return true;
  }

  @Auth(AuthType.None)
  @Post('signIn-otp')
  async siginInOtp(@Body() body: { username: string }) {
    return await this.authService.signInOtp(body.username);
  }
}
