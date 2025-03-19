import { Field, InputType } from '@nestjs/graphql';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';

@InputType()
export class CreateDepartmentInput {
  @Field()
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
