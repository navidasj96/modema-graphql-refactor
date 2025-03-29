import { Resolver } from '@nestjs/graphql';
import { ContactFormHistoryService } from './contact-form-history.service';
import { ContactFormHistory } from './domain/contact-form-history';

@Resolver(() => ContactFormHistory)
export class ContactFormHistoryResolver {
  constructor(
    private readonly contactFormHistoryService: ContactFormHistoryService,
  ) {}
}
