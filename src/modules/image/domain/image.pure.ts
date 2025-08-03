import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { CampaignVotingImagePure } from '@/modules/campaign-voting-image/domain/campaign-voting-image.pure';
import { ColorCategoryPure } from '@/modules/color-category/domain/color-category.pure';
import { CustomerImageProductPure } from '@/modules/customer-image-product/domain/customer-image-product.pure';
import { HelpDeskPure } from '@/modules/help-desk/domain/help-desk.pure';
import { HomePageCustomerImagePure } from '@/modules/home-page-customer-image/domain/home-page-customer-image.pure';
import { ImageProductPure } from '@/modules/image-product/domain/image-product.pure';
import { ImageSubproductPure } from '@/modules/image-subproduct/domain/image-subproduct.pure';
import { ImagesSizeGuidesDetailPure } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail.pure';
import { PatternCategoryPure } from '@/modules/pattern-category/domain/pattern-category.pure';
import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { ProductColorImagePure } from '@/modules/product-color-image/domain/product-color-image.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { ReturnRequestItemImagePure } from '@/modules/return-request-item-image/domain/return-request-item-image.pure';
import { SizeGuidePure } from '@/modules/size-guide/domain/size-guide.pure';
import { SizeGuidesDetailPure } from '@/modules/size-guides-detail/domain/size-guides-detail.pure';
import { SubproductSpecialImagePure } from '@/modules/subproduct-special-image/domain/subproduct-special-image.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
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

  @Field(() => [HelpDeskPure])
  helpDesks: HelpDeskPure[];

  @Field(() => [HomePageCustomerImagePure])
  homePageCustomerImages: HomePageCustomerImagePure[];

  @Field(() => [HomePageCustomerImagePure])
  homePageCustomerImages2: HomePageCustomerImagePure[];

  @Field(() => [ImageProductPure])
  imageProducts: ImageProductPure[];

  @Field(() => [ImageSubproductPure])
  imageSubproducts: ImageSubproductPure[];

  @Field(() => [ImagesSizeGuidesDetailPure])
  imagesSizeGuidesDetails: ImagesSizeGuidesDetailPure[];

  @Field(() => [PatternCategoryPure])
  patternCategories: PatternCategoryPure[];

  @Field(() => [ProductCategoryPure])
  productCategories: ProductCategoryPure[];

  @Field(() => [ProductCategoryPure])
  productCategories2: ProductCategoryPure[];

  @Field(() => [ProductCategoryPure])
  productCategories3: ProductCategoryPure[];

  @Field(() => [ProductColorImagePure])
  productColorImages: ProductColorImagePure[];

  @Field(() => [ProductPure])
  products: ProductPure[];

  @Field(() => [ReturnRequestItemImagePure])
  returnRequestItemImages: ReturnRequestItemImagePure[];

  @Field(() => [SizeGuidePure])
  sizeGuides: SizeGuidePure[];

  @Field(() => [SizeGuidesDetailPure])
  sizeGuidesDetails: SizeGuidesDetailPure[];

  @Field(() => [SubproductSpecialImagePure])
  subproductSpecialImages: SubproductSpecialImagePure[];

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Tag])
  tags2: Tag[];
}
