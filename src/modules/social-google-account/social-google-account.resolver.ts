import { Resolver } from '@nestjs/graphql';
import { SocialGoogleAccountService } from './social-google-account.service';
import { SocialGoogleAccount } from '@/modules/social-google-account/domain/social-google-account';

@Resolver(() => SocialGoogleAccount)
export class SocialGoogleAccountResolver {
  constructor(
    private readonly socialGoogleAccountService: SocialGoogleAccountService,
  ) {}
}
