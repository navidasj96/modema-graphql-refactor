import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  mobileImageId?: number;

  @Field({ nullable: true })
  homepageImageId?: number;

  @Field()
  showOnHomepage: boolean;

  @Field({ nullable: true })
  imageSizeId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field({ nullable: true })
  hierarchyCode?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  pageTitleSingleSize?: string;

  @Field({ nullable: true })
  descriptionSingleSize?: string;

  @Field({ nullable: true })
  metaTagsSingleSize?: string;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  searchNameEn?: string;

  @Field({ nullable: true })
  metaTagsEn?: string;

  @Field({ nullable: true })
  pageTitleEn?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  urlSlugEn?: string;
}
