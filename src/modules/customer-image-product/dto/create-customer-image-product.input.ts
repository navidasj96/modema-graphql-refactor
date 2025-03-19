import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';

@InputType()
export class CreateCustomerImageProductInput {
  @Field()
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

  @Field(() => Image)
  image: Image;

  @Field(() => Product)
  product: Product;
}
