import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { DiscountPure } from '@/modules/discount/domain/discount.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('IncredibleOfferPureDomain')
@ObjectType()
export class IncredibleOfferPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  offerDate: string;

  @Field()
  productId: number;

  @Field()
  basicCarpetColorId: number;

  @Field({ nullable: true })
  discountId?: number;

  @Field()
  discountPercent: number;

  @Field()
  count: number;

  @Field()
  soldCount: number;

  @Field()
  isFake: boolean;

  @Field()
  sortOrder: number;

  @Field({ nullable: true })
  place?: number;

  @Field(() => BasicCarpetColorPure, { nullable: true })
  basicCarpetColor?: BasicCarpetColorPure;

  @Field(() => DiscountPure, { nullable: true })
  discount?: DiscountPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;
}
