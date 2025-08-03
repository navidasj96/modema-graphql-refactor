import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { CampaignVotingImagePure } from '@/modules/campaign-voting-image/domain/campaign-voting-image.pure';
import { ColorCategoryPure } from '@/modules/color-category/domain/color-category.pure';
import { CustomerImageProductPure } from '@/modules/customer-image-product/domain/customer-image-product.pure';
import { HelpDesk } from '@/modules/help-desk/domain/help-desk.pure';
import { HomePageCustomerImage } from '@/modules/home-page-customer-image/domain/home-page-customer-image.pure';
import { ImageProduct } from '@/modules/image-product/domain/image-product.pure';
import { ImageSubproduct } from '@/modules/image-subproduct/domain/image-subproduct.pure';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail.pure';
import { PatternCategory } from '@/modules/pattern-category/domain/pattern-category.pure';
import { ProductCategory } from '@/modules/product-category/domain/product-category.pure';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image.pure';
import { Product } from '@/modules/product/domain/product.pure';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/domain/return-request-item-image.pure';
import { SizeGuide } from '@/modules/size-guide/domain/size-guide.pure';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail.pure';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/domain/subproduct-special-image.pure';
import { Subproduct } from '@/modules/subproduct/domain/subproduct.pure';
import { Tag } from '@/modules/tag/domain/tag';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('ImagePureDomain')
@ObjectType()
export class ImagePure {
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

  @Field(() => [BasicCarpetSizePure])
  basicCarpetSizes: BasicCarpetSizePure[];

  @Field(() => [BasicCarpetSizePure])
  basicCarpetSizes2: BasicCarpetSizePure[];

  @Field(() => [CampaignVotingImagePure])
  campaignVotingImages: CampaignVotingImagePure[];

  @Field(() => [ColorCategoryPure])
  colorCategories: ColorCategoryPure[];

  @Field(() => [ColorCategoryPure])
  colorCategories2: ColorCategoryPure[];

  @Field(() => [ColorCategoryPure])
  colorCategories3: ColorCategoryPure[];

  @Field(() => [CustomerImageProductPure])
  customerImageProducts: CustomerImageProductPure[];

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
