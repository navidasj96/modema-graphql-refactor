import { ContactFormPure } from '@/modules/contact-form/domain/contact-form.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DepartmentPureDomain')
@ObjectType()
export class DepartmentPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  nameEn?: string;

  @Field(() => [ContactFormPure])
  contactForms: ContactFormPure[];
}
