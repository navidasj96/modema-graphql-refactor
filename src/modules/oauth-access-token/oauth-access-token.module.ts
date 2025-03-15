import { Module } from '@nestjs/common';
import { OauthAccessTokenService } from './oauth-access-token.service';
import { OauthAccessTokenResolver } from './oauth-access-token.resolver';
import { OauthAccessToken } from '@/modules/oauth-access-token/entities/oauth-access-token.entity';
import { OauthAccessToken as OauthAccessTokenGraphQL } from '@/modules/oauth-access-token/domain/oauth-access-token';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateOauthAccessTokenInput } from '@/modules/oauth-access-token/dto/create-oauth-access-token.input';

@Module({
  providers: [OauthAccessTokenResolver, OauthAccessTokenService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OauthAccessToken])],
      resolvers: [
        {
          EntityClass: OauthAccessToken,
          DTOClass: OauthAccessTokenGraphQL,
          CreateDTOClass: CreateOauthAccessTokenInput,
        },
      ],
    }),
  ],
})
export class OauthAccessTokenModule {}
