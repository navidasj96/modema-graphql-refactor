import { ImagePure } from '@/modules/image/domain/image.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CustomerImageProductPureDomain')
@ObjectType()
export class CustomerImageProductPure {
  @Field(() => ID)
  id: number;

  @Field()
  imageId: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure)
  image: ImagePure;

  @Field(() => ProductPure)
  product: ProductPure;
}
