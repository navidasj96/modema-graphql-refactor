import { Module } from '@nestjs/common';
import { OauthPersonalAccessClientService } from './oauth-personal-access-client.service';
import { OauthPersonalAccessClientResolver } from './oauth-personal-access-client.resolver';
import { OauthPersonalAccessClient } from '@/modules/oauth-personal-access-client/entities/oauth-personal-access-client.entity';
import { OauthPersonalAccessClient as OauthPersonalAccessClientGraphQL } from '@/modules/oauth-personal-access-client/domain/oauth-personal-access-client';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateOauthPersonalAccessClientInput } from '@/modules/oauth-personal-access-client/dto/create-oauth-personal-access-client.input';

@Module({
  providers: [
    OauthPersonalAccessClientResolver,
    OauthPersonalAccessClientService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([OauthPersonalAccessClient]),
      ],
      resolvers: [
        {
          EntityClass: OauthPersonalAccessClient,
          DTOClass: OauthPersonalAccessClientGraphQL,
          CreateDTOClass: CreateOauthPersonalAccessClientInput,
        },
      ],
    }),
  ],
})
export class OauthPersonalAccessClientModule {}
