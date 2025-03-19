import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';
import { Video } from '@/modules/video/domain/video';

@ObjectType()
export class CustomerVideoProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  videoId: number;

  @Field()
  productId: number;

  @Field({ nullable: true, defaultValue: 0 })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Video)
  video: Video;
}
