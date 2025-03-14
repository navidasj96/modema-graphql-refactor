import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContactFormHistoryInput {
  @Field()
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
