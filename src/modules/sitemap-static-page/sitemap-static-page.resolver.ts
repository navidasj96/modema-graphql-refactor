import { Resolver } from '@nestjs/graphql';
import { SitemapStaticPageService } from './sitemap-static-page.service';
import { SitemapStaticPage } from '@/modules/sitemap-static-page/domain/sitemap-static-page';

@Resolver(() => SitemapStaticPage)
export class SitemapStaticPageResolver {
  constructor(
    private readonly sitemapStaticPageService: SitemapStaticPageService
  ) {}
}
