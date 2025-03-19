import { Field, InputType } from '@nestjs/graphql';
import { CustomerVideoProduct } from '@/modules/customer-video-product/domain/customer-video-product';
import { ProductVideo } from '@/modules/product-video/domain/product-video';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/domain/return-request-item-video';
import { SubproductVideo } from '@/modules/subproduct-video/domain/subproduct-video';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateVideoInput {
  @Field()
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

  @Field(() => [CustomerVideoProduct])
  customerVideoProducts: CustomerVideoProduct[];

  @Field(() => [ProductVideo])
  productVideos: ProductVideo[];

  @Field(() => [ReturnRequestItemVideo])
  returnRequestItemVideos: ReturnRequestItemVideo[];

  @Field(() => [SubproductVideo])
  subproductVideos: SubproductVideo[];

  @Field(() => [Subproduct])
  subproducts: Subproduct[];
}
