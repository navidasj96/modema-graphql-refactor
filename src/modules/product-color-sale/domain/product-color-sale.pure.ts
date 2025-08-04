import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductColorSalePureDomain')
@ObjectType()
export class ProductColorSalePure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  basicCarpetColorId: number;

  @Field()
  saleCount: number;

  @Field()
  saleCountYear: number;

  @Field()
  averageSaleCount: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetColorPure)
  basicCarpetColor: BasicCarpetColorPure;

  @Field(() => ProductPure)
  product: ProductPure;
}
