import { ImagePure } from '@/modules/image/domain/image.pure';
import { ProductTagPure } from '@/modules/product-tag/domain/product-tag.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TagPureDomain')
@ObjectType()
export class TagPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  sliderImageId?: number;

  @Field({ nullable: true })
  discount?: number;

  @Field()
  specialOffer: number;

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

  @Field(() => [ProductTagPure])
  productTags: ProductTagPure[];

  @Field(() => ImagePure, { nullable: true })
  sliderImage?: ImagePure;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;
}
