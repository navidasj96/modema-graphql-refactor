import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignUefaEuroSubscriberHistoryInput {
  @Field()
  id: number;

  @Field()
  campaignUefaEuroSubscriberId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  contactFormStatusId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
