import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { Product } from '@/modules/product/domain/product';
import { Video } from '@/modules/video/domain/video';

@InputType('ProductVideoDomain')
@ObjectType()
export class ProductVideo {
  @IDField(() => ID)
  id: number;

  @Field()
  videoId: number;

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

  @Field(() => Product)
  product: Product;

  @Field(() => Video)
  video: Video;
}
