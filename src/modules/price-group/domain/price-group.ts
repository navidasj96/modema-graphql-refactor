import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { PriceGroupSize } from '@/modules/price-group-size/domain/price-group-size';
import { Product } from '@/modules/product/domain/product';

@ObjectType()
export class PriceGroup {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [DiscountSubject])
  discountSubjects: DiscountSubject[];

  @Field(() => [PriceGroupSize])
  priceGroupSizes: PriceGroupSize[];

  @Field(() => [Product])
  products: Product[];
}
