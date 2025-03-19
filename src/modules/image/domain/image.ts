import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { CampaignVotingImage } from '@/modules/campaign-voting-image/domain/campaign-voting-image';
import { ColorCategory } from '@/modules/color-category/domain/color-category';
import { CustomerImageProduct } from '@/modules/customer-image-product/domain/customer-image-product';
import { HelpDesk } from '@/modules/help-desk/domain/help-desk';
import { HomePageCustomerImage } from '@/modules/home-page-customer-image/domain/home-page-customer-image';
import { ImageProduct } from '@/modules/image-product/domain/image-product';
import { ImageSubproduct } from '@/modules/image-subproduct/domain/image-subproduct';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail';
import { PatternCategory } from '@/modules/pattern-category/domain/pattern-category';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image';
import { Product } from '@/modules/product/domain/product';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/domain/return-request-item-image';
import { SizeGuide } from '@/modules/size-guide/domain/size-guide';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/domain/subproduct-special-image';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Tag } from '@/modules/tag/domain/tag';

@ObjectType()
export class Image {
  @IDField(() => ID)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  imageRecreated: boolean;

  @Field({ nullable: true })
  altTextEn?: string;

  @Field(() => [BasicCarpetSize])
  basicCarpetSizes: BasicCarpetSize[];

  @Field(() => [BasicCarpetSize])
  basicCarpetSizes2: BasicCarpetSize[];

  @Field(() => [CampaignVotingImage])
  campaignVotingImages: CampaignVotingImage[];

  @Field(() => [ColorCategory])
  colorCategories: ColorCategory[];

  @Field(() => [ColorCategory])
  colorCategories2: ColorCategory[];

  @Field(() => [ColorCategory])
  colorCategories3: ColorCategory[];

  @Field(() => [CustomerImageProduct])
  customerImageProducts: CustomerImageProduct[];

  @Field(() => [HelpDesk])
  helpDesks: HelpDesk[];

  @Field(() => [HomePageCustomerImage])
  homePageCustomerImages: HomePageCustomerImage[];

  @Field(() => [HomePageCustomerImage])
  homePageCustomerImages2: HomePageCustomerImage[];

  @Field(() => [ImageProduct])
  imageProducts: ImageProduct[];

  @Field(() => [ImageSubproduct])
  imageSubproducts: ImageSubproduct[];

  @Field(() => [ImagesSizeGuidesDetail])
  imagesSizeGuidesDetails: ImagesSizeGuidesDetail[];

  @Field(() => [PatternCategory])
  patternCategories: PatternCategory[];

  @Field(() => [ProductCategory])
  productCategories: ProductCategory[];

  @Field(() => [ProductCategory])
  productCategories2: ProductCategory[];

  @Field(() => [ProductCategory])
  productCategories3: ProductCategory[];

  @Field(() => [ProductColorImage])
  productColorImages: ProductColorImage[];

  @Field(() => [Product])
  products: Product[];

  @Field(() => [ReturnRequestItemImage])
  returnRequestItemImages: ReturnRequestItemImage[];

  @Field(() => [SizeGuide])
  sizeGuides: SizeGuide[];

  @Field(() => [SizeGuidesDetail])
  sizeGuidesDetails: SizeGuidesDetail[];

  @Field(() => [SubproductSpecialImage])
  subproductSpecialImages: SubproductSpecialImage[];

  @Field(() => [Subproduct])
  subproducts: Subproduct[];

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Tag])
  tags2: Tag[];
}
