import { Resolver } from '@nestjs/graphql';
import { HelpDeskService } from './help-desk.service';
import { HelpDesk } from './domain/help-desk';

@Resolver(() => HelpDesk)
export class HelpDeskResolver {
  constructor(private readonly helpDeskService: HelpDeskService) {}
}
