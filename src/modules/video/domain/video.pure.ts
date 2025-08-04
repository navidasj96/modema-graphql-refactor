import { CustomerVideoProductPure } from '@/modules/customer-video-product/domain/customer-video-product.pure';
import { ProductVideoPure } from '@/modules/product-video/domain/product-video.pure';
import { ReturnRequestItemVideoPure } from '@/modules/return-request-item-video/domain/return-request-item-video.pure';
import { SubproductVideoPure } from '@/modules/subproduct-video/domain/subproduct-video.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VideoPureDomain')
@ObjectType()
export class VideoPure {
  @Field(() => ID)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CustomerVideoProductPure])
  customerVideoProducts: CustomerVideoProductPure[];

  @Field(() => [ProductVideoPure])
  productVideos: ProductVideoPure[];

  @Field(() => [ReturnRequestItemVideoPure])
  returnRequestItemVideos: ReturnRequestItemVideoPure[];

  @Field(() => [SubproductVideoPure])
  subproductVideos: SubproductVideoPure[];

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];
}
