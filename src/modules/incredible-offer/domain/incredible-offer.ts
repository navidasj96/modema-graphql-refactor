import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { Discount } from '@/modules/discount/domain/discount';
import { Product } from '@/modules/product/domain/product';

@InputType('IncredibleOfferDomain')
@ObjectType()
export class IncredibleOffer {
  @IDField(() => ID)
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

  @Field(() => BasicCarpetColor, { nullable: true })
  basicCarpetColor?: BasicCarpetColor;

  @Field(() => Discount, { nullable: true })
  discount?: Discount;

  @Field(() => Product, { nullable: true })
  product?: Product;
}
