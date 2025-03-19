import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';

@ObjectType()
export class Department {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  nameEn?: string;

  @Field(() => [ContactForm])
  contactForms: ContactForm[];
}
