import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';

@InputType('CreateProductColorImageInput')
export class CreateProductColorImageInput {
  @Field()
  id: number;

  @Field()
  imageId: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetColor, { nullable: true })
  basicCarpetColor?: BasicCarpetColor;

  @Field(() => Image)
  image: Image;

  @Field(() => Product)
  product: Product;
}
