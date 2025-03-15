import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OauthRefreshTokenService } from './oauth-refresh-token.service';
import { CreateOauthRefreshTokenInput } from './dto/create-oauth-refresh-token.input';
import { OauthRefreshToken } from '@/modules/oauth-refresh-token/domain/oauth-refresh-token';

@Resolver(() => OauthRefreshToken)
export class OauthRefreshTokenResolver {
  constructor(
    private readonly oauthRefreshTokenService: OauthRefreshTokenService,
  ) {}

  @Mutation(() => OauthRefreshToken)
  createOauthRefreshToken(
    @Args('createOauthRefreshTokenInput')
    createOauthRefreshTokenInput: CreateOauthRefreshTokenInput,
  ) {
    return this.oauthRefreshTokenService.create(createOauthRefreshTokenInput);
  }

  @Query(() => [OauthRefreshToken], { name: 'oauthRefreshToken' })
  findAll() {
    return this.oauthRefreshTokenService.findAll();
  }

  @Query(() => OauthRefreshToken, { name: 'oauthRefreshToken' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthRefreshTokenService.findOne(id);
  }

  // @Mutation(() => OauthRefreshToken)
  // updateOauthRefreshToken(@Args('updateOauthRefreshTokenInput') updateOauthRefreshTokenInput: UpdateOauthRefreshTokenInput) {
  //   return this.oauthRefreshTokenService.update(updateOauthRefreshTokenInput.id, updateOauthRefreshTokenInput);
  // }

  @Mutation(() => OauthRefreshToken)
  removeOauthRefreshToken(@Args('id', { type: () => Int }) id: number) {
    return this.oauthRefreshTokenService.remove(id);
  }
}
