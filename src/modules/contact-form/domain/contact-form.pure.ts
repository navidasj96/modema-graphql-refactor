import { ContactFormHistoryPure } from '@/modules/contact-form-history/domain/contact-form-history.pure';
import { ContactFormStatusPure } from '@/modules/contact-form-status/domain/contact-form-status.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { DepartmentPure } from '@/modules/department/domain/department.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ContactFormPureDomain')
@ObjectType()
export class ContactFormPure {
  @Field(() => ID)
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

  @Field(() => [ContactFormHistoryPure])
  contactFormHistories: ContactFormHistoryPure[];

  @Field(() => ContactFormStatusPure)
  contactFormStatus: ContactFormStatusPure;

  @Field(() => CountryPure)
  country: CountryPure;

  @Field(() => DepartmentPure)
  department: DepartmentPure;

  @Field(() => UserPure)
  user: UserPure;
}
