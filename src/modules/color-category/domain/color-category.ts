import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { ColorCategoryDetail } from '@/modules/color-category-detail/domain/color-category-detail';
import { ColorCategorySubproduct } from '@/modules/color-category-subproduct/domain/color-category-subproduct';

@ObjectType()
export class ColorCategory {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  viewCounter: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  mobileImageId?: number;

  @Field({ nullable: true })
  homepageImageId?: number;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  altTextEn?: string;

  @Field({ nullable: true })
  metaTagsEn?: string;

  @Field({ nullable: true })
  pageTitleEn?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  urlSlugEn?: string;

  @Field(() => Image)
  homepageImage: Image;

  @Field(() => Image)
  image: Image;

  @Field(() => Image)
  mobileImage: Image;

  @Field(() => [ColorCategoryDetail])
  colorCategoryDetails: ColorCategoryDetail[];

  @Field(() => [ColorCategorySubproduct])
  colorCategorySubproducts: ColorCategorySubproduct[];
}
