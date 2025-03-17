import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SitemapStaticPageService } from './sitemap-static-page.service';
import { CreateSitemapStaticPageInput } from './dto/create-sitemap-static-page.input';
import { UpdateSitemapStaticPageInput } from './dto/update-sitemap-static-page.input';
import { SitemapStaticPage } from '@/modules/sitemap-static-page/domain/sitemap-static-page';

@Resolver(() => SitemapStaticPage)
export class SitemapStaticPageResolver {
  constructor(
    private readonly sitemapStaticPageService: SitemapStaticPageService,
  ) {}

  @Mutation(() => SitemapStaticPage)
  createSitemapStaticPage(
    @Args('createSitemapStaticPageInput')
    createSitemapStaticPageInput: CreateSitemapStaticPageInput,
  ) {
    return this.sitemapStaticPageService.create(createSitemapStaticPageInput);
  }

  @Query(() => [SitemapStaticPage], { name: 'sitemapStaticPage' })
  findAll() {
    return this.sitemapStaticPageService.findAll();
  }

  @Query(() => SitemapStaticPage, { name: 'sitemapStaticPage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sitemapStaticPageService.findOne(id);
  }

  @Mutation(() => SitemapStaticPage)
  updateSitemapStaticPage(
    @Args('updateSitemapStaticPageInput')
    updateSitemapStaticPageInput: UpdateSitemapStaticPageInput,
  ) {
    return this.sitemapStaticPageService.update(
      updateSitemapStaticPageInput.id,
      updateSitemapStaticPageInput,
    );
  }

  @Mutation(() => SitemapStaticPage)
  removeSitemapStaticPage(@Args('id', { type: () => Int }) id: number) {
    return this.sitemapStaticPageService.remove(id);
  }
}
