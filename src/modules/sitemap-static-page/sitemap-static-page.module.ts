import { Module } from '@nestjs/common';
import { SitemapStaticPageService } from './sitemap-static-page.service';
import { SitemapStaticPageResolver } from './sitemap-static-page.resolver';
import { SitemapStaticPage } from '@/modules/sitemap-static-page/entities/sitemap-static-page.entity';
import { SitemapStaticPage as SitemapStaticPageGraphQL } from '@/modules/sitemap-static-page/domain/sitemap-static-page';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSitemapStaticPageInput } from '@/modules/sitemap-static-page/dto/create-sitemap-static-page.input';

@Module({
  providers: [SitemapStaticPageResolver, SitemapStaticPageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SitemapStaticPage])],
      resolvers: [
        {
          EntityClass: SitemapStaticPage,
          DTOClass: SitemapStaticPageGraphQL,
          CreateDTOClass: CreateSitemapStaticPageInput,
        },
      ],
    }),
  ],
})
export class SitemapStaticPageModule {}
