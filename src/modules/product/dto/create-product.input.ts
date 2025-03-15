import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field({ nullable: true })
  russianName?: string;

  @Field({ nullable: true })
  price?: string;

  @Field({ nullable: true })
  priceGroupId?: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  saleCount: number;

  @Field()
  saleCountDaily: number;

  @Field()
  totalLike: number;

  @Field()
  totalDislike: number;

  @Field()
  rate: number;

  @Field({ nullable: true })
  rateCount?: number;

  @Field()
  size: number;

  @Field()
  sizeIsCustomizable: number;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  length?: number;

  @Field({ nullable: true })
  colors?: string;

  @Field()
  designerIsGeneral: number;

  @Field({ nullable: true })
  collectionName?: string;

  @Field()
  isSelfEmployedDesigner: number;

  @Field({ nullable: true })
  isCarpetPad?: boolean;

  @Field()
  isShaggy: boolean;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  minBasicCarpetSizeId?: number;

  @Field({ nullable: true })
  bestSellerColorId?: number;

  @Field()
  carpetHasRoots: boolean;

  @Field({ nullable: true })
  parentProductId?: number;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  emallsTitle?: string;

  @Field()
  emallsActive: boolean;

  @Field()
  snapppayActive: boolean;

  @Field({ nullable: true })
  snapppaySortOrder?: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  activeUpdatedAt: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  newSubproductsCreated: number;

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

  @Field({ nullable: true })
  nameEs?: string;
}
