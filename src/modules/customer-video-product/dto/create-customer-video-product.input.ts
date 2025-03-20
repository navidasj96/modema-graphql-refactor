import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';
import { Video } from '@/modules/video/domain/video';

@InputType('CreateCustomerVideoProductInput')
export class CreateCustomerVideoProductInput {
  @Field()
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
