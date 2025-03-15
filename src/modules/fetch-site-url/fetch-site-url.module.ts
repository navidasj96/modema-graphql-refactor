import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { FetchSiteUrl } from './entities/fetch-site-url.entity';
import { FetchSiteUrl as FetchSiteUrlGraphQL } from './domain/fetch-site-url';
import { CreateFetchSiteUrlInput } from './dto/create-fetch-site-url.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([FetchSiteUrl])],
      resolvers: [
        {
          EntityClass: FetchSiteUrl,
          DTOClass: FetchSiteUrlGraphQL,
          CreateDTOClass: CreateFetchSiteUrlInput,
        },
      ],
    }),
  ],
})
export class FetchSiteUrlModule {}
