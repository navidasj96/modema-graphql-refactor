import { Resolver } from '@nestjs/graphql';
import { FetchSiteUrlService } from './fetch-site-url.service';
import { FetchSiteUrl } from './domain/fetch-site-url';

@Resolver(() => FetchSiteUrl)
export class FetchSiteUrlResolver {
  constructor(private readonly fetchSiteUrlService: FetchSiteUrlService) {}
}
