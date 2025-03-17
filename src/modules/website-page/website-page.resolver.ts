import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WebsitePageService } from './website-page.service';
import { CreateWebsitePageInput } from './dto/create-website-page.input';
import { UpdateWebsitePageInput } from './dto/update-website-page.input';
import { WebsitePage } from '@/modules/website-page/domain/website-page';

@Resolver(() => WebsitePage)
export class WebsitePageResolver {
  constructor(private readonly websitePageService: WebsitePageService) {}

  @Mutation(() => WebsitePage)
  createWebsitePage(
    @Args('createWebsitePageInput')
    createWebsitePageInput: CreateWebsitePageInput,
  ) {
    return this.websitePageService.create(createWebsitePageInput);
  }

  @Query(() => [WebsitePage], { name: 'websitePage' })
  findAll() {
    return this.websitePageService.findAll();
  }

  @Query(() => WebsitePage, { name: 'websitePage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.websitePageService.findOne(id);
  }

  @Mutation(() => WebsitePage)
  updateWebsitePage(
    @Args('updateWebsitePageInput')
    updateWebsitePageInput: UpdateWebsitePageInput,
  ) {
    return this.websitePageService.update(
      updateWebsitePageInput.id,
      updateWebsitePageInput,
    );
  }

  @Mutation(() => WebsitePage)
  removeWebsitePage(@Args('id', { type: () => Int }) id: number) {
    return this.websitePageService.remove(id);
  }
}
