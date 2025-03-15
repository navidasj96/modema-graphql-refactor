import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OauthAccessTokenService } from './oauth-access-token.service';
import { CreateOauthAccessTokenInput } from './dto/create-oauth-access-token.input';
import { OauthAccessToken } from '@/modules/oauth-access-token/domain/oauth-access-token';

@Resolver(() => OauthAccessToken)
export class OauthAccessTokenResolver {
  constructor(
    private readonly oauthAccessTokenService: OauthAccessTokenService,
  ) {}

  @Mutation(() => OauthAccessToken)
  createOauthAccessToken(
    @Args('createOauthAccessTokenInput')
    createOauthAccessTokenInput: CreateOauthAccessTokenInput,
  ) {
    return this.oauthAccessTokenService.create(createOauthAccessTokenInput);
  }

  @Query(() => [OauthAccessToken], { name: 'oauthAccessToken' })
  findAll() {
    return this.oauthAccessTokenService.findAll();
  }

  @Query(() => OauthAccessToken, { name: 'oauthAccessToken' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthAccessTokenService.findOne(id);
  }

  // @Mutation(() => OauthAccessToken)
  // updateOauthAccessToken(@Args('updateOauthAccessTokenInput') updateOauthAccessTokenInput: UpdateOauthAccessTokenInput) {
  //   return this.oauthAccessTokenService.update(updateOauthAccessTokenInput.id, updateOauthAccessTokenInput);
  // }

  @Mutation(() => OauthAccessToken)
  removeOauthAccessToken(@Args('id', { type: () => Int }) id: number) {
    return this.oauthAccessTokenService.remove(id);
  }
}
