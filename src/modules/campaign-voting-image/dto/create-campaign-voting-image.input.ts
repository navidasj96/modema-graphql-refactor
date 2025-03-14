import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignVotingImageInput {
  @Field()
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
