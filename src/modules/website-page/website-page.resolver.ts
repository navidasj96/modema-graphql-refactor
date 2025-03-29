import { Resolver } from '@nestjs/graphql';
import { WebsitePageService } from './website-page.service';
import { WebsitePage } from '@/modules/website-page/domain/website-page';

@Resolver(() => WebsitePage)
export class WebsitePageResolver {
  constructor(private readonly websitePageService: WebsitePageService) {}
}
