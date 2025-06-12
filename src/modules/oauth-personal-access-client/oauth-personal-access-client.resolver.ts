import { Resolver } from '@nestjs/graphql';
import { OauthPersonalAccessClientService } from './oauth-personal-access-client.service';
import { OauthPersonalAccessClient } from '@/modules/oauth-personal-access-client/domain/oauth-personal-access-client';

@Resolver(() => OauthPersonalAccessClient)
export class OauthPersonalAccessClientResolver {
  constructor(
    private readonly oauthPersonalAccessClientService: OauthPersonalAccessClientService
  ) {}
}
