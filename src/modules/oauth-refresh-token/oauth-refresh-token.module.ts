import { Module } from '@nestjs/common';
import { OauthRefreshTokenService } from './oauth-refresh-token.service';
import { OauthRefreshTokenResolver } from './oauth-refresh-token.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { OauthRefreshToken } from '@/modules/oauth-refresh-token/entities/oauth-refresh-token.entity';
import { OauthRefreshToken as OauthRefreshTokenGraphQL } from '@/modules/oauth-refresh-token/domain/oauth-refresh-token';
import { CreateOauthRefreshTokenInput } from '@/modules/oauth-refresh-token/dto/create-oauth-refresh-token.input';

@Module({
  providers: [OauthRefreshTokenResolver, OauthRefreshTokenService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OauthRefreshToken])],
      resolvers: [
        {
          EntityClass: OauthRefreshToken,
          DTOClass: OauthRefreshTokenGraphQL,
          CreateDTOClass: CreateOauthRefreshTokenInput,
        },
      ],
    }),
  ],
})
export class OauthRefreshTokenModule {}
