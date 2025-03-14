import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CampaignUefaEuroSubscriber {
  @IDField(() => ID)
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
