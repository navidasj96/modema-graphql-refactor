import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetSizeDetail } from '@/modules/basic-carpet-size-detail/domain/basic-carpet-size-detail';
import { Image } from '@/modules/image/domain/image';
import { CampaignFreeOfferSize } from '@/modules/campaign-free-offer-size/domain/campaign-free-offer-size';
import { CouponSubject } from '@/modules/coupon-subject/domain/coupon-subject';
import { DesignersProductPriceRange } from '@/modules/designers-product-price-range/domain/designers-product-price-range';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { PriceGroupSize } from '@/modules/price-group-size/domain/price-group-size';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { Product } from '@/modules/product/domain/product';
import { RipTemplateItem } from '@/modules/rip-template-item/domain/rip-template-item';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';

@InputType('CreateBasicCarpetSizeInput')
export class CreateBasicCarpetSizeInput {
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

  @Field(() => [BasicCarpetSizeDetail])
  basicCarpetSizeDetails: BasicCarpetSizeDetail[];

  @Field(() => Image)
  image: Image;

  @Field(() => Image)
  mobileImage: Image;

  @Field(() => [CampaignFreeOfferSize])
  campaignFreeOfferSizes: CampaignFreeOfferSize[];

  @Field(() => [CouponSubject])
  couponSubjects: CouponSubject[];

  @Field(() => [DesignersProductPriceRange])
  designersProductPriceRanges: DesignersProductPriceRange[];

  @Field(() => [DiscountSubject])
  discountSubjects: DiscountSubject[];

  @Field(() => [PriceGroupSize])
  priceGroupSizes: PriceGroupSize[];

  @Field(() => [ProductionPad])
  productionPads: ProductionPad[];

  @Field(() => [Product])
  products: Product[];

  @Field(() => [RipTemplateItem])
  ripTemplateItems: RipTemplateItem[];

  @Field(() => [Subproduct])
  subproducts: Subproduct[];

  @Field(() => [TorobProduct])
  torobProducts: TorobProduct[];
}
