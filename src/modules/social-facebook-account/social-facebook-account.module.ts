import { Module } from '@nestjs/common';
import { SocialFacebookAccountService } from './social-facebook-account.service';
import { SocialFacebookAccountResolver } from './social-facebook-account.resolver';
import { SocialFacebookAccount } from '@/modules/social-facebook-account/entities/social-facebook-account.entity';
import { SocialFacebookAccount as SocialFacebookAccountGraphQL } from '@/modules/social-facebook-account/domain/social-facebook-account';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSocialFacebookAccountInput } from '@/modules/social-facebook-account/dto/create-social-facebook-account.input';

@Module({
  providers: [SocialFacebookAccountResolver, SocialFacebookAccountService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SocialFacebookAccount])],
      resolvers: [
        {
          EntityClass: SocialFacebookAccount,
          DTOClass: SocialFacebookAccountGraphQL,
          CreateDTOClass: CreateSocialFacebookAccountInput,
        },
      ],
    }),
  ],
})
export class SocialFacebookAccountModule {}
