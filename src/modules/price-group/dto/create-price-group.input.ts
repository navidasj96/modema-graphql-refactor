import { Field, InputType } from '@nestjs/graphql';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { PriceGroupSize } from '@/modules/price-group-size/domain/price-group-size';
import { Product } from '@/modules/product/domain/product';

@InputType('CreatePriceGroupInput')
export class CreatePriceGroupInput {
  @Field()
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
