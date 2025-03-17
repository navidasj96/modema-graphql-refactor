import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WebsiteVisitService } from './website-visit.service';
import { CreateWebsiteVisitInput } from './dto/create-website-visit.input';
import { UpdateWebsiteVisitInput } from './dto/update-website-visit.input';
import { WebsiteVisit } from '@/modules/website-visit/domain/website-visit';

@Resolver(() => WebsiteVisit)
export class WebsiteVisitResolver {
  constructor(private readonly websiteVisitService: WebsiteVisitService) {}

  @Mutation(() => WebsiteVisit)
  createWebsiteVisit(
    @Args('createWebsiteVisitInput')
    createWebsiteVisitInput: CreateWebsiteVisitInput,
  ) {
    return this.websiteVisitService.create(createWebsiteVisitInput);
  }

  @Query(() => [WebsiteVisit], { name: 'websiteVisit' })
  findAll() {
    return this.websiteVisitService.findAll();
  }

  @Query(() => WebsiteVisit, { name: 'websiteVisit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.websiteVisitService.findOne(id);
  }

  @Mutation(() => WebsiteVisit)
  updateWebsiteVisit(
    @Args('updateWebsiteVisitInput')
    updateWebsiteVisitInput: UpdateWebsiteVisitInput,
  ) {
    return this.websiteVisitService.update(
      updateWebsiteVisitInput.id,
      updateWebsiteVisitInput,
    );
  }

  @Mutation(() => WebsiteVisit)
  removeWebsiteVisit(@Args('id', { type: () => Int }) id: number) {
    return this.websiteVisitService.remove(id);
  }
}
