import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BasicCarpetSizePureInput')
@ObjectType('BasicCarpetSizePureDomain')
export class BasicCarpetSizePure {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field({ nullable: true, defaultValue: 0 })
  carpetVolume?: number;

  @Field({ nullable: true, defaultValue: 0 })
  padVolume?: number;

  @Field()
  unitRatio: number;

  @Field({ defaultValue: 0 })
  viewCounter: number;

  @Field({ nullable: true })
  sizeText?: string;

  @Field({ nullable: true })
  widthText?: string;

  @Field({ nullable: true })
  lengthText?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

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
  titleEn?: string;

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

  @Field({ nullable: true })
  sizeTextEn?: string;
}
