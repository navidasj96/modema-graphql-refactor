import { ProductPure } from '@/modules/product/domain/product.pure';
import { VideoPure } from '@/modules/video/domain/video.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CustomerVideoProductPureDomain')
@ObjectType()
export class CustomerVideoProductPure {
  @Field(() => ID)
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

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => VideoPure)
  video: VideoPure;
}
