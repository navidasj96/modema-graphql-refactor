import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('HomePageCustomerImageDomain')
@ObjectType()
export class HomePageCustomerImage {
  @IDField(() => ID)
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

  @Field(() => Image, { nullable: true })
  desktopImage?: Image;

  @Field(() => Image, { nullable: true })
  mobileImage?: Image;

  @Field(() => Product, { nullable: true })
  product?: Product;
}
