import { DiscountSubjectPure } from '@/modules/discount-subject/domain/discount-subject.pure';
import { PriceGroupSizePure } from '@/modules/price-group-size/domain/price-group-size.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PriceGroupPureDomain')
@ObjectType()
export class PriceGroupPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [DiscountSubjectPure])
  discountSubjects: DiscountSubjectPure[];

  @Field(() => [PriceGroupSizePure])
  priceGroupSizes: PriceGroupSizePure[];

  @Field(() => [ProductPure])
  products: ProductPure[];
}
