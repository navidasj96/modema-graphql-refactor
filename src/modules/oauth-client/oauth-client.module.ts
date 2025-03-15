import { Module } from '@nestjs/common';
import { OauthClientService } from './oauth-client.service';
import { OauthClientResolver } from './oauth-client.resolver';
import { OauthClient } from '@/modules/oauth-client/entities/oauth-client.entity';
import { OauthClient as OauthClientGraphQL } from '@/modules/oauth-client/domain/oauth-client';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateOauthClientInput } from '@/modules/oauth-client/dto/create-oauth-client.input';

@Module({
  providers: [OauthClientResolver, OauthClientService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OauthClient])],
      resolvers: [
        {
          EntityClass: OauthClient,
          DTOClass: OauthClientGraphQL,
          CreateDTOClass: CreateOauthClientInput,
        },
      ],
    }),
  ],
})
export class OauthClientModule {}
