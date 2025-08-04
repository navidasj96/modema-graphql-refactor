import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { AttributeProductPure } from '@/modules/attribute-product/domain/attribute-product.pure';
import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { CouponSubjectPure } from '@/modules/coupon-subject/domain/coupon-subject.pure';
import { CustomerImageProductPure } from '@/modules/customer-image-product/domain/customer-image-product.pure';
import { CustomerVideoProductPure } from '@/modules/customer-video-product/domain/customer-video-product.pure';
import { DiscountNotificationPure } from '@/modules/discount-notification/domain/discount-notification.pure';
import { DiscountSubjectPure } from '@/modules/discount-subject/domain/discount-subject.pure';
import { FavoriteProductPure } from '@/modules/favorite-product/domain/favorite-product.pure';
import { HomePageCustomerImagePure } from '@/modules/home-page-customer-image/domain/home-page-customer-image.pure';
import { ImageProductPure } from '@/modules/image-product/domain/image-product.pure';
import { ImagePure } from '@/modules/image/domain/image.pure';
import { IncredibleOfferPure } from '@/modules/incredible-offer/domain/incredible-offer.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { LabelProductPure } from '@/modules/label-product/domain/label-product.pure';
import { OutOfStockButListedProductPure } from '@/modules/out-of-stock-but-listed-product/domain/out-of-stock-but-listed-product.pure';
import { PreorderPure } from '@/modules/preorder/domain/preorder.pure';
import { PriceGroupPure } from '@/modules/price-group/domain/price-group.pure';
import { ProductColorImagePure } from '@/modules/product-color-image/domain/product-color-image.pure';
import { ProductColorSalePure } from '@/modules/product-color-sale/domain/product-color-sale.pure';
import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { ProductLikePure } from '@/modules/product-like/domain/product-like.pure';
import { ProductProductCategoryPure } from '@/modules/product-product-category/domain/product-product-category.pure';
import { ProductRateAveragePure } from '@/modules/product-rate-average/domain/product-rate-average.pure';
import { ProductRatePure } from '@/modules/product-rate/domain/product-rate.pure';
import { ProductTagPure } from '@/modules/product-tag/domain/product-tag.pure';
import { ProductVideoPure } from '@/modules/product-video/domain/product-video.pure';
import { ReadyToSendProductPure } from '@/modules/ready-to-send-product/domain/ready-to-send-product.pure';
import { RecommendedProductPure } from '@/modules/recommended-product/domain/recommended-product.pure';
import { RelatedProductPure } from '@/modules/related-product/domain/related-product.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnedInvoiceProductPure } from '@/modules/returned-invoice-product/domain/returned-invoice-product.pure';
import { SpecialOfferPure } from '@/modules/special-offer/domain/special-offer.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { TorobProductPure } from '@/modules/torob-product/domain/torob-product.pure';
import { UserCartPure } from '@/modules/user-cart/domain/user-cart.pure';
import { WonderfulOfferPure } from '@/modules/wonderful-offer/domain/wonderful-offer.pure';

@InputType('ProductPureDomain')
@ObjectType()
export class ProductPure {
  @Field(() => ID)
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
  isCarpetPad?: number;

  @Field()
  isShaggy: number;

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
  carpetHasRoots: number;

  @Field({ nullable: true })
  parentProductId?: number;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  emallsTitle?: string;

  @Field()
  emallsActive: number;

  @Field()
  snapppayActive: number;

  @Field({ nullable: true })
  snapppaySortOrder?: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: number;

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

  @Field(() => [AttributeProductPure])
  attributeProducts: AttributeProductPure[];

  @Field(() => [CouponSubjectPure])
  couponSubjects: CouponSubjectPure[];

  @Field(() => [CustomerImageProductPure])
  customerImageProducts: CustomerImageProductPure[];

  @Field(() => [CustomerVideoProductPure])
  customerVideoProducts: CustomerVideoProductPure[];

  @Field(() => [DiscountNotificationPure])
  discountNotifications: DiscountNotificationPure[];

  @Field(() => [DiscountSubjectPure])
  discountSubjects: DiscountSubjectPure[];

  @Field(() => [FavoriteProductPure])
  favoriteProducts: FavoriteProductPure[];

  @Field(() => [HomePageCustomerImagePure])
  homePageCustomerImages: HomePageCustomerImagePure[];

  @Field(() => [ImageProductPure])
  imageProducts: ImageProductPure[];

  @Field(() => [IncredibleOfferPure])
  incredibleOffers: IncredibleOfferPure[];

  @Field(() => [InvoiceProductHistoryPure])
  invoiceProductHistories: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductHistoryPure])
  invoiceProductHistories2: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductPure])
  invoiceProducts: InvoiceProductPure[];

  @Field(() => [InvoiceProductPure])
  invoiceProducts2: InvoiceProductPure[];

  @Field(() => [LabelProductPure])
  labelProducts: LabelProductPure[];

  @Field(() => [OutOfStockButListedProductPure])
  outOfStockButListedProducts: OutOfStockButListedProductPure[];

  @Field(() => [PreorderPure])
  preorders: PreorderPure[];

  @Field(() => [ProductColorImagePure])
  productColorImages: ProductColorImagePure[];

  @Field(() => [ProductColorSalePure])
  productColorSales: ProductColorSalePure[];

  @Field(() => [ProductCommentPure])
  productComments: ProductCommentPure[];

  @Field(() => [ProductLikePure])
  productLikes: ProductLikePure[];

  @Field(() => [ProductProductCategoryPure])
  productProductCategories: ProductProductCategoryPure[];

  @Field(() => [ProductRatePure])
  productRates: ProductRatePure[];

  @Field(() => [ProductRateAveragePure])
  productRateAverages: ProductRateAveragePure[];

  @Field(() => [ProductTagPure])
  productTags: ProductTagPure[];

  @Field(() => [ProductVideoPure])
  productVideos: ProductVideoPure[];

  @Field(() => BasicCarpetColorPure)
  bestSellerColor: BasicCarpetColorPure;

  @Field(() => ImagePure)
  image: ImagePure;

  @Field(() => BasicCarpetSizePure)
  minBasicCarpetSize: BasicCarpetSizePure;

  @Field(() => ProductPure, { nullable: true })
  parentProduct?: ProductPure;

  @Field(() => [ProductPure], { nullable: true })
  products?: ProductPure[];

  @Field(() => PriceGroupPure)
  priceGroup: PriceGroupPure;

  @Field(() => [ReadyToSendProductPure])
  readyToSendProducts: ReadyToSendProductPure[];

  @Field(() => [RecommendedProductPure])
  recommendedProducts: RecommendedProductPure[];

  @Field(() => [RelatedProductPure])
  relatedProducts: RelatedProductPure[];

  @Field(() => [RelatedProductPure])
  relatedProducts2: RelatedProductPure[];

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemPure])
  returnRequestItems: ReturnRequestItemPure[];

  @Field(() => [ReturnedInvoiceProductPure])
  returnedInvoiceProducts: ReturnedInvoiceProductPure[];

  @Field(() => [SpecialOfferPure])
  specialOffers: SpecialOfferPure[];

  @Field(() => [SpecialOfferPure])
  specialOffers2: SpecialOfferPure[];

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];

  @Field(() => [TorobProductPure])
  torobProducts: TorobProductPure[];

  @Field(() => [UserCartPure])
  userCarts: UserCartPure[];

  @Field(() => [UserCartPure])
  userCarts2: UserCartPure[];

  @Field(() => [WonderfulOfferPure])
  wonderfulOffers: WonderfulOfferPure[];
}
