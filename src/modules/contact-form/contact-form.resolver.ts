import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactFormService } from './contact-form.service';
import { CreateContactFormInput } from './dto/create-contact-form.input';
import { UpdateContactFormInput } from './dto/update-contact-form.input';
import { ContactForm } from './domain/contact-form';

@Resolver(() => ContactForm)
export class ContactFormResolver {
  constructor(private readonly contactFormService: ContactFormService) {}

  @Mutation(() => ContactForm)
  createContactForm(
    @Args('createContactFormInput')
    createContactFormInput: CreateContactFormInput,
  ) {
    return this.contactFormService.create(createContactFormInput);
  }

  @Query(() => [ContactForm], { name: 'contactForm' })
  findAll() {
    return this.contactFormService.findAll();
  }

  @Query(() => ContactForm, { name: 'contactForm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormService.findOne(id);
  }

  @Mutation(() => ContactForm)
  updateContactForm(
    @Args('updateContactFormInput')
    updateContactFormInput: UpdateContactFormInput,
  ) {
    return this.contactFormService.update(
      updateContactFormInput.id,
      updateContactFormInput,
    );
  }

  @Mutation(() => ContactForm)
  removeContactForm(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormService.remove(id);
  }
}
