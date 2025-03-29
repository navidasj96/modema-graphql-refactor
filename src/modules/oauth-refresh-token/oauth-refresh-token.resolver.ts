import { Resolver } from '@nestjs/graphql';
import { OauthRefreshTokenService } from './oauth-refresh-token.service';
import { OauthRefreshToken } from '@/modules/oauth-refresh-token/domain/oauth-refresh-token';

@Resolver(() => OauthRefreshToken)
export class OauthRefreshTokenResolver {
  constructor(
    private readonly oauthRefreshTokenService: OauthRefreshTokenService,
  ) {}
}
