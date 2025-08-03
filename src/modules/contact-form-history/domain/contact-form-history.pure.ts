import { ContactFormStatusPure } from '@/modules/contact-form-status/domain/contact-form-status.pure';
import { ContactFormPure } from '@/modules/contact-form/domain/contact-form.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ContactFormHistoryPureDomain')
@ObjectType()
export class ContactFormHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  contactFormId: number;

  @Field()
  userId: number;

  @Field()
  contactFormStatusId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ContactFormPure)
  contactForm: ContactFormPure;

  @Field(() => ContactFormStatusPure)
  contactFormStatus: ContactFormStatusPure;

  @Field(() => UserPure)
  user: UserPure;
}
