import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OauthClientService } from './oauth-client.service';
import { CreateOauthClientInput } from './dto/create-oauth-client.input';
import { UpdateOauthClientInput } from './dto/update-oauth-client.input';
import { OauthClient } from '@/modules/oauth-client/domain/oauth-client';

@Resolver(() => OauthClient)
export class OauthClientResolver {
  constructor(private readonly oauthClientService: OauthClientService) {}

  @Mutation(() => OauthClient)
  createOauthClient(
    @Args('createOauthClientInput')
    createOauthClientInput: CreateOauthClientInput,
  ) {
    return this.oauthClientService.create(createOauthClientInput);
  }

  @Query(() => [OauthClient], { name: 'oauthClient' })
  findAll() {
    return this.oauthClientService.findAll();
  }

  @Query(() => OauthClient, { name: 'oauthClient' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthClientService.findOne(id);
  }

  @Mutation(() => OauthClient)
  updateOauthClient(
    @Args('updateOauthClientInput')
    updateOauthClientInput: UpdateOauthClientInput,
  ) {
    return this.oauthClientService.update(
      updateOauthClientInput.id,
      updateOauthClientInput,
    );
  }

  @Mutation(() => OauthClient)
  removeOauthClient(@Args('id', { type: () => Int }) id: number) {
    return this.oauthClientService.remove(id);
  }
}
