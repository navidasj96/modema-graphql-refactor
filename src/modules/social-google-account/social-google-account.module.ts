import { Module } from '@nestjs/common';
import { SocialGoogleAccountService } from './social-google-account.service';
import { SocialGoogleAccountResolver } from './social-google-account.resolver';
import { SocialGoogleAccount } from '@/modules/social-google-account/entities/social-google-account.entity';
import { SocialGoogleAccount as SocialGoogleAccountGraphQL } from '@/modules/social-google-account/domain/social-google-account';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSocialGoogleAccountInput } from '@/modules/social-google-account/dto/create-social-google-account.input';

@Module({
  providers: [SocialGoogleAccountResolver, SocialGoogleAccountService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SocialGoogleAccount])],
      resolvers: [
        {
          EntityClass: SocialGoogleAccount,
          DTOClass: SocialGoogleAccountGraphQL,
          CreateDTOClass: CreateSocialGoogleAccountInput,
        },
      ],
    }),
  ],
})
export class SocialGoogleAccountModule {}
