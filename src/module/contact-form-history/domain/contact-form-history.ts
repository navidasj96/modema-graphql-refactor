import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
