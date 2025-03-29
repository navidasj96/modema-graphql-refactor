import { Resolver } from '@nestjs/graphql';
import { ContactFormStatusService } from './contact-form-status.service';
import { ContactFormStatus } from './domain/contact-form-status';

@Resolver(() => ContactFormStatus)
export class ContactFormStatusResolver {
  constructor(
    private readonly contactFormStatusService: ContactFormStatusService,
  ) {}
}
