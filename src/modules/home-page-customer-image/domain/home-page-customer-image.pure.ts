import { ImagePure } from '@/modules/image/domain/image.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HomePageCustomerImagePureDomain')
@ObjectType()
export class HomePageCustomerImagePure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  mobileImageId?: number;

  @Field({ nullable: true })
  desktopImageId?: number;

  @Field()
  sortOrder: number;

  @Field({ nullable: true })
  desktopImageAlt?: string;

  @Field({ nullable: true })
  mobileImageAlt?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  productId?: number;

  @Field(() => ImagePure, { nullable: true })
  desktopImage?: ImagePure;

  @Field(() => ImagePure, { nullable: true })
  mobileImage?: ImagePure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;
}
