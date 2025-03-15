import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactFormHistoryService } from './contact-form-history.service';
import { CreateContactFormHistoryInput } from './dto/create-contact-form-history.input';
import { UpdateContactFormHistoryInput } from './dto/update-contact-form-history.input';
import { ContactFormHistory } from './domain/contact-form-history';

@Resolver(() => ContactFormHistory)
export class ContactFormHistoryResolver {
  constructor(
    private readonly contactFormHistoryService: ContactFormHistoryService,
  ) {}

  @Mutation(() => ContactFormHistory)
  createContactFormHistory(
    @Args('createContactFormHistoryInput')
    createContactFormHistoryInput: CreateContactFormHistoryInput,
  ) {
    return this.contactFormHistoryService.create(createContactFormHistoryInput);
  }

  @Query(() => [ContactFormHistory], { name: 'contactFormHistory' })
  findAll() {
    return this.contactFormHistoryService.findAll();
  }

  @Query(() => ContactFormHistory, { name: 'contactFormHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormHistoryService.findOne(id);
  }

  @Mutation(() => ContactFormHistory)
  updateContactFormHistory(
    @Args('updateContactFormHistoryInput')
    updateContactFormHistoryInput: UpdateContactFormHistoryInput,
  ) {
    return this.contactFormHistoryService.update(
      updateContactFormHistoryInput.id,
      updateContactFormHistoryInput,
    );
  }

  @Mutation(() => ContactFormHistory)
  removeContactFormHistory(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormHistoryService.remove(id);
  }
}
