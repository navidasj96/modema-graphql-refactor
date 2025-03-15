import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignFreeOfferInput {
  @Field()
  id: number;

  @Field()
  minPrice: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
