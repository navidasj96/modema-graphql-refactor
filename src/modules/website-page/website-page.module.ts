import { Module } from '@nestjs/common';
import { WebsitePageService } from './website-page.service';
import { WebsitePageResolver } from './website-page.resolver';
import { WebsitePage } from '@/modules/website-page/entities/website-page.entity';
import { WebsitePage as WebsitePageGraphQL } from '@/modules/website-page/domain/website-page';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWebsitePageInput } from '@/modules/website-page/dto/create-website-page.input';

@Module({
  providers: [WebsitePageResolver, WebsitePageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WebsitePage])],
      resolvers: [
        {
          EntityClass: WebsitePage,
          DTOClass: WebsitePageGraphQL,
          CreateDTOClass: CreateWebsitePageInput,
        },
      ],
    }),
  ],
})
export class WebsitePageModule {}
