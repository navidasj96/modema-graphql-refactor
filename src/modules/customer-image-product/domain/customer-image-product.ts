import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';

@ObjectType()
export class CustomerImageProduct {
  @IDField(() => ID)
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
