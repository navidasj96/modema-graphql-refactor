import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { ImagePure } from '@/modules/image/domain/image.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductColorImagePureDomain')
@ObjectType()
export class ProductColorImagePure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetColorPure, { nullable: true })
  basicCarpetColor?: BasicCarpetColorPure;

  @Field(() => ImagePure)
  image: ImagePure;

  @Field(() => ProductPure)
  product: ProductPure;
}
