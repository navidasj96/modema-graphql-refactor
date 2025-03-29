import { Resolver } from '@nestjs/graphql';
import { WebsiteVisitService } from './website-visit.service';
import { WebsiteVisit } from '@/modules/website-visit/domain/website-visit';

@Resolver(() => WebsiteVisit)
export class WebsiteVisitResolver {
  constructor(private readonly websiteVisitService: WebsiteVisitService) {}
}
