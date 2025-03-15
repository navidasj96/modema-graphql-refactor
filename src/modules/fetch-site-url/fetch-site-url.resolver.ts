import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FetchSiteUrlService } from './fetch-site-url.service';
import { CreateFetchSiteUrlInput } from './dto/create-fetch-site-url.input';
import { UpdateFetchSiteUrlInput } from './dto/update-fetch-site-url.input';
import { FetchSiteUrl } from './domain/fetch-site-url';

@Resolver(() => FetchSiteUrl)
export class FetchSiteUrlResolver {
  constructor(private readonly fetchSiteUrlService: FetchSiteUrlService) {}

  @Mutation(() => FetchSiteUrl)
  createFetchSiteUrl(
    @Args('createFetchSiteUrlInput')
    createFetchSiteUrlInput: CreateFetchSiteUrlInput,
  ) {
    return this.fetchSiteUrlService.create(createFetchSiteUrlInput);
  }

  @Query(() => [FetchSiteUrl], { name: 'fetchSiteUrl' })
  findAll() {
    return this.fetchSiteUrlService.findAll();
  }

  @Query(() => FetchSiteUrl, { name: 'fetchSiteUrl' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fetchSiteUrlService.findOne(id);
  }

  @Mutation(() => FetchSiteUrl)
  updateFetchSiteUrl(
    @Args('updateFetchSiteUrlInput')
    updateFetchSiteUrlInput: UpdateFetchSiteUrlInput,
  ) {
    return this.fetchSiteUrlService.update(
      updateFetchSiteUrlInput.id,
      updateFetchSiteUrlInput,
    );
  }

  @Mutation(() => FetchSiteUrl)
  removeFetchSiteUrl(@Args('id', { type: () => Int }) id: number) {
    return this.fetchSiteUrlService.remove(id);
  }
}
