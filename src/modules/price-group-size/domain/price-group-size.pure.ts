import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { PriceGroupPure } from '@/modules/price-group/domain/price-group.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PriceGroupSizePureDomain')
@ObjectType()
export class PriceGroupSizePure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => PriceGroupPure)
  priceGroup: PriceGroupPure;
}
