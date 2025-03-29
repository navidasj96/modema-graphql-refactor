import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { PriceGroup } from '@/modules/price-group/domain/price-group';

@InputType('PriceGroupSizeDomain')
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

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => PriceGroup)
  priceGroup: PriceGroup;
}
