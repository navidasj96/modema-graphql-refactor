import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { VideoPure } from '@/modules/video/domain/video.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductVideoPureDomain')
@ObjectType()
export class ProductVideoPure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetColorPure, { nullable: true })
  basicCarpetColor?: BasicCarpetColorPure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => VideoPure)
  video: VideoPure;
}
