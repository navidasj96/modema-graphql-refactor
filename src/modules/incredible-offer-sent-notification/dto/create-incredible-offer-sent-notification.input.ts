import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateIncredibleOfferSentNotificationInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
