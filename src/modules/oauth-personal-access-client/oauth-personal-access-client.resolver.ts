import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OauthPersonalAccessClientService } from './oauth-personal-access-client.service';
import { CreateOauthPersonalAccessClientInput } from './dto/create-oauth-personal-access-client.input';
import { UpdateOauthPersonalAccessClientInput } from './dto/update-oauth-personal-access-client.input';
import { OauthPersonalAccessClient } from '@/modules/oauth-personal-access-client/domain/oauth-personal-access-client';

@Resolver(() => OauthPersonalAccessClient)
export class OauthPersonalAccessClientResolver {
  constructor(
    private readonly oauthPersonalAccessClientService: OauthPersonalAccessClientService,
  ) {}

  @Mutation(() => OauthPersonalAccessClient)
  createOauthPersonalAccessClient(
    @Args('createOauthPersonalAccessClientInput')
    createOauthPersonalAccessClientInput: CreateOauthPersonalAccessClientInput,
  ) {
    return this.oauthPersonalAccessClientService.create(
      createOauthPersonalAccessClientInput,
    );
  }

  @Query(() => [OauthPersonalAccessClient], {
    name: 'oauthPersonalAccessClient',
  })
  findAll() {
    return this.oauthPersonalAccessClientService.findAll();
  }

  @Query(() => OauthPersonalAccessClient, { name: 'oauthPersonalAccessClient' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthPersonalAccessClientService.findOne(id);
  }

  @Mutation(() => OauthPersonalAccessClient)
  updateOauthPersonalAccessClient(
    @Args('updateOauthPersonalAccessClientInput')
    updateOauthPersonalAccessClientInput: UpdateOauthPersonalAccessClientInput,
  ) {
    return this.oauthPersonalAccessClientService.update(
      updateOauthPersonalAccessClientInput.id,
      updateOauthPersonalAccessClientInput,
    );
  }

  @Mutation(() => OauthPersonalAccessClient)
  removeOauthPersonalAccessClient(@Args('id', { type: () => Int }) id: number) {
    return this.oauthPersonalAccessClientService.remove(id);
  }
}
