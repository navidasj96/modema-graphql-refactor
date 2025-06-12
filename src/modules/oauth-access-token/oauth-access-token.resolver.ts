import { Resolver } from '@nestjs/graphql';
import { OauthAccessTokenService } from './oauth-access-token.service';
import { OauthAccessToken } from '@/modules/oauth-access-token/domain/oauth-access-token';

@Resolver(() => OauthAccessToken)
export class OauthAccessTokenResolver {
  constructor(
    private readonly oauthAccessTokenService: OauthAccessTokenService
  ) {}
}
