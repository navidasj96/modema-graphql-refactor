import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateTorobProductInput {
  @Field()
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

  @Field(() => BasicCarpetColor, { nullable: true })
  basicCarpetColor?: BasicCarpetColor;

  @Field(() => BasicCarpetSize, { nullable: true })
  basicCarpetSize?: BasicCarpetSize;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;
}
