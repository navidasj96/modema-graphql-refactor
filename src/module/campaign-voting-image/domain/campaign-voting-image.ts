import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CampaignVotingImage {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  campaignNo: number;

  @Field({ defaultValue: 1 })
  sortOrder: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
