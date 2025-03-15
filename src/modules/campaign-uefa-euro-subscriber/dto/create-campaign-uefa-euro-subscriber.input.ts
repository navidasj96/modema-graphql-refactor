import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignUefaEuroSubscriberInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  mobile: string;

  @Field({ defaultValue: 1 })
  status: number;

  @Field({ defaultValue: 1 })
  contactFormStatusId: number;
}
