import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SocialGoogleAccountService } from './social-google-account.service';
import { CreateSocialGoogleAccountInput } from './dto/create-social-google-account.input';
import { UpdateSocialGoogleAccountInput } from './dto/update-social-google-account.input';
import { SocialGoogleAccount } from '@/modules/social-google-account/domain/social-google-account';

@Resolver(() => SocialGoogleAccount)
export class SocialGoogleAccountResolver {
  constructor(
    private readonly socialGoogleAccountService: SocialGoogleAccountService,
  ) {}

  @Mutation(() => SocialGoogleAccount)
  createSocialGoogleAccount(
    @Args('createSocialGoogleAccountInput')
    createSocialGoogleAccountInput: CreateSocialGoogleAccountInput,
  ) {
    return this.socialGoogleAccountService.create(
      createSocialGoogleAccountInput,
    );
  }

  @Query(() => [SocialGoogleAccount], { name: 'socialGoogleAccount' })
  findAll() {
    return this.socialGoogleAccountService.findAll();
  }

  @Query(() => SocialGoogleAccount, { name: 'socialGoogleAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.socialGoogleAccountService.findOne(id);
  }

  @Mutation(() => SocialGoogleAccount)
  updateSocialGoogleAccount(
    @Args('updateSocialGoogleAccountInput')
    updateSocialGoogleAccountInput: UpdateSocialGoogleAccountInput,
  ) {
    return this.socialGoogleAccountService.update(
      updateSocialGoogleAccountInput.id,
      updateSocialGoogleAccountInput,
    );
  }

  @Mutation(() => SocialGoogleAccount)
  removeSocialGoogleAccount(@Args('id', { type: () => Int }) id: number) {
    return this.socialGoogleAccountService.remove(id);
  }
}
