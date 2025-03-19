import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { ProductTag } from '@/modules/product-tag/domain/product-tag';

@ObjectType()
export class Tag {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  sliderImageId?: number;

  @Field({ nullable: true })
  discount?: number;

  @Field()
  specialOffer: boolean;

  @Field()
  columnWidth: number;

  @Field()
  columnOrder: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  searchTitle?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  titleEn?: string;

  @Field({ nullable: true })
  searchTitleEn?: string;

  @Field({ nullable: true })
  metaTagsEn?: string;

  @Field({ nullable: true })
  pageTitleEn?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  urlSlugEn?: string;

  @Field(() => [ProductTag])
  productTags: ProductTag[];

  @Field(() => Image, { nullable: true })
  sliderImage?: Image;

  @Field(() => Image, { nullable: true })
  image?: Image;
}
