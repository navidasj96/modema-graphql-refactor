import { Module } from '@nestjs/common';
import { OauthAuthCodeService } from './oauth-auth-code.service';
import { OauthAuthCodeResolver } from './oauth-auth-code.resolver';
import { OauthAuthCode } from '@/modules/oauth-auth-code/entities/oauth-auth-code.entity';
import { OauthAuthCode as OauthAuthCodeGraphQL } from '@/modules/oauth-auth-code/domain/oauth-auth-code';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateOauthAuthCodeInput } from '@/modules/oauth-auth-code/dto/create-oauth-auth-code.input';

@Module({
  providers: [OauthAuthCodeResolver, OauthAuthCodeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OauthAuthCode])],
      resolvers: [
        {
          EntityClass: OauthAuthCode,
          DTOClass: OauthAuthCodeGraphQL,
          CreateDTOClass: CreateOauthAuthCodeInput,
        },
      ],
    }),
  ],
})
export class OauthAuthCodeModule {}
