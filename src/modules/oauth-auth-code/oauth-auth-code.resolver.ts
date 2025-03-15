import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OauthAuthCodeService } from './oauth-auth-code.service';
import { CreateOauthAuthCodeInput } from './dto/create-oauth-auth-code.input';
import { OauthAuthCode } from '@/modules/oauth-auth-code/domain/oauth-auth-code';

@Resolver(() => OauthAuthCode)
export class OauthAuthCodeResolver {
  constructor(private readonly oauthAuthCodeService: OauthAuthCodeService) {}

  @Mutation(() => OauthAuthCode)
  createOauthAuthCode(
    @Args('createOauthAuthCodeInput')
    createOauthAuthCodeInput: CreateOauthAuthCodeInput,
  ) {
    return this.oauthAuthCodeService.create(createOauthAuthCodeInput);
  }

  @Query(() => [OauthAuthCode], { name: 'oauthAuthCode' })
  findAll() {
    return this.oauthAuthCodeService.findAll();
  }

  @Query(() => OauthAuthCode, { name: 'oauthAuthCode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.oauthAuthCodeService.findOne(id);
  }

  // @Mutation(() => OauthAuthCode)
  // updateOauthAuthCode(@Args('updateOauthAuthCodeInput') updateOauthAuthCodeInput: UpdateOauthAuthCodeInput) {
  //   return this.oauthAuthCodeService.update(updateOauthAuthCodeInput.id, updateOauthAuthCodeInput);
  // }

  @Mutation(() => OauthAuthCode)
  removeOauthAuthCode(@Args('id', { type: () => Int }) id: number) {
    return this.oauthAuthCodeService.remove(id);
  }
}
