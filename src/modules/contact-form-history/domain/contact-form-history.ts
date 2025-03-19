import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';
import { ContactFormStatus } from '@/modules/contact-form-status/domain/contact-form-status';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class ContactFormHistory {
  @IDField(() => ID)
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

  @Field(() => ContactForm)
  contactForm: ContactForm;

  @Field(() => ContactFormStatus)
  contactFormStatus: ContactFormStatus;

  @Field(() => User)
  user: User;
}
