import { Resolver } from '@nestjs/graphql';
import { ContactFormService } from './contact-form.service';
import { ContactForm } from './domain/contact-form';

@Resolver(() => ContactForm)
export class ContactFormResolver {
  constructor(private readonly contactFormService: ContactFormService) {}
}
