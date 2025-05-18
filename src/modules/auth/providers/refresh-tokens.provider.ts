import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { GenerateTokenProvider } from './generate-token.provider';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { UserService } from '@/modules/user/user.service';
import { RefreshTokenDto } from '@/modules/auth/dtos/refresh-token.dto';
import { Response } from 'express';
import { TokensName } from '@/modules/auth/enums/tokens-name.enum';

@Injectable()
export class RefreshTokensProvider {
  constructor(
    /**
     * inject jwtService
     */
    private readonly jwtService: JwtService,
    /**
     * inject jewConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    /**
     * Inject generateTokenProvider
     */
    private readonly generateTokenProvider: GenerateTokenProvider,
    /**
     * Inject userService
     */
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService
  ) {}

  public async refreshTokens(refreshTokenDto: RefreshTokenDto, res: Response) {
    try {
      //verify the refresh token using jwtService
      const { sub } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'>
      >(refreshTokenDto.refreshToken, {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
      });
      //fetch user from database
      const user = await this.userService.findOneById(sub);

      //generate the tokens
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
      return { accessToken, refreshToken };
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
