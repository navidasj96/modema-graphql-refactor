import { Resolver } from '@nestjs/graphql';
import { OauthAuthCodeService } from './oauth-auth-code.service';
import { OauthAuthCode } from '@/modules/oauth-auth-code/domain/oauth-auth-code';

@Resolver(() => OauthAuthCode)
export class OauthAuthCodeResolver {
  constructor(private readonly oauthAuthCodeService: OauthAuthCodeService) {}
}
