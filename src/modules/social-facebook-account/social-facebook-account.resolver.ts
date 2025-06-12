import { Resolver } from '@nestjs/graphql';
import { SocialFacebookAccountService } from './social-facebook-account.service';
import { SocialFacebookAccount } from '@/modules/social-facebook-account/domain/social-facebook-account';

@Resolver(() => SocialFacebookAccount)
export class SocialFacebookAccountResolver {
  constructor(
    private readonly socialFacebookAccountService: SocialFacebookAccountService
  ) {}
}
