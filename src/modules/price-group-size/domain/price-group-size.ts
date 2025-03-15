import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class PriceGroupSize {
  @IDField(() => ID)
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
