import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TorobProductPureDomain')
@ObjectType()
export class TorobProductPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  sizeTitle?: string;

  @Field({ nullable: true })
  colorTitle?: string;

  @Field({ nullable: true })
  torobCategory?: string;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => BasicCarpetColorPure, { nullable: true })
  basicCarpetColor?: BasicCarpetColorPure;

  @Field(() => BasicCarpetSizePure, { nullable: true })
  basicCarpetSize?: BasicCarpetSizePure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;
}
