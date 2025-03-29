import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ContactFormHistory } from '@/modules/contact-form-history/domain/contact-form-history';
import { ContactFormStatus } from '@/modules/contact-form-status/domain/contact-form-status';
import { Country } from '@/modules/country/domain/country';
import { Department } from '@/modules/department/domain/department';
import { User } from '@/modules/user/domain/user';

@InputType('ContactFormDomain')
@ObjectType()
export class ContactForm {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  departmentId?: number;

  @Field({ nullable: true })
  text?: string;

  @Field()
  contactFormStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  countryId: number;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  answer1?: string;

  @Field({ nullable: true })
  answer2?: string;

  @Field({ nullable: true })
  answer3?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ContactFormHistory])
  contactFormHistories: ContactFormHistory[];

  @Field(() => ContactFormStatus)
  contactFormStatus: ContactFormStatus;

  @Field(() => Country)
  country: Country;

  @Field(() => Department)
  department: Department;

  @Field(() => User)
  user: User;
}
