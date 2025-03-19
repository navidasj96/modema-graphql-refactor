import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';

@InputType()
export class CreateImageProductInput {
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

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => Product, { nullable: true })
  product?: Product;
}
