import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
