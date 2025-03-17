import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SocialFacebookAccountService } from './social-facebook-account.service';
import { CreateSocialFacebookAccountInput } from './dto/create-social-facebook-account.input';
import { UpdateSocialFacebookAccountInput } from './dto/update-social-facebook-account.input';
import { SocialFacebookAccount } from '@/modules/social-facebook-account/domain/social-facebook-account';

@Resolver(() => SocialFacebookAccount)
export class SocialFacebookAccountResolver {
  constructor(
    private readonly socialFacebookAccountService: SocialFacebookAccountService,
  ) {}

  @Mutation(() => SocialFacebookAccount)
  createSocialFacebookAccount(
    @Args('createSocialFacebookAccountInput')
    createSocialFacebookAccountInput: CreateSocialFacebookAccountInput,
  ) {
    return this.socialFacebookAccountService.create(
      createSocialFacebookAccountInput,
    );
  }

  @Query(() => [SocialFacebookAccount], { name: 'socialFacebookAccount' })
  findAll() {
    return this.socialFacebookAccountService.findAll();
  }

  @Query(() => SocialFacebookAccount, { name: 'socialFacebookAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.socialFacebookAccountService.findOne(id);
  }

  @Mutation(() => SocialFacebookAccount)
  updateSocialFacebookAccount(
    @Args('updateSocialFacebookAccountInput')
    updateSocialFacebookAccountInput: UpdateSocialFacebookAccountInput,
  ) {
    return this.socialFacebookAccountService.update(
      updateSocialFacebookAccountInput.id,
      updateSocialFacebookAccountInput,
    );
  }

  @Mutation(() => SocialFacebookAccount)
  removeSocialFacebookAccount(@Args('id', { type: () => Int }) id: number) {
    return this.socialFacebookAccountService.remove(id);
  }
}
