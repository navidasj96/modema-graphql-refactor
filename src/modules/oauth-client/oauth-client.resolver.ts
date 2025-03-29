import { Resolver } from '@nestjs/graphql';
import { OauthClientService } from './oauth-client.service';
import { OauthClient } from '@/modules/oauth-client/domain/oauth-client';

@Resolver(() => OauthClient)
export class OauthClientResolver {
  constructor(private readonly oauthClientService: OauthClientService) {}
}
