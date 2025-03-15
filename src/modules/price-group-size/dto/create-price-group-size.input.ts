import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePriceGroupSizeInput {
  @Field()
  id: number;

  @Field()
  priceGroupId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  price: string;

  @Field()
  padPrice: string;

  @Field({ nullable: true })
  bundlePrice?: string;

  @Field({ nullable: true })
  bundlePadPrice?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
