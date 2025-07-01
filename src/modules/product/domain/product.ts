import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { AttributeProduct } from '@/modules/attribute-product/domain/attribute-product';
import { CouponSubject } from '@/modules/coupon-subject/domain/coupon-subject';
import { CustomerImageProduct } from '@/modules/customer-image-product/domain/customer-image-product';
import { CustomerVideoProduct } from '@/modules/customer-video-product/domain/customer-video-product';
import { DiscountNotification } from '@/modules/discount-notification/domain/discount-notification';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { FavoriteProduct } from '@/modules/favorite-product/domain/favorite-product';
import { HomePageCustomerImage } from '@/modules/home-page-customer-image/domain/home-page-customer-image';
import { ImageProduct } from '@/modules/image-product/domain/image-product';
import { IncredibleOffer } from '@/modules/incredible-offer/domain/incredible-offer';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { LabelProduct } from '@/modules/label-product/domain/label-product';
import { OutOfStockButListedProduct } from '@/modules/out-of-stock-but-listed-product/domain/out-of-stock-but-listed-product';
import { Preorder } from '@/modules/preorder/domain/preorder';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image';
import { ProductColorSale } from '@/modules/product-color-sale/domain/product-color-sale';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { ProductLike } from '@/modules/product-like/domain/product-like';
import { ProductProductCategory } from '@/modules/product-product-category/domain/product-product-category';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';
import { ProductRateAverage } from '@/modules/product-rate-average/domain/product-rate-average';
import { ProductTag } from '@/modules/product-tag/domain/product-tag';
import { ProductVideo } from '@/modules/product-video/domain/product-video';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { Image } from '@/modules/image/domain/image';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { PriceGroup } from '@/modules/price-group/domain/price-group';
import { ReadyToSendProduct } from '@/modules/ready-to-send-product/domain/ready-to-send-product';
import { RecommendedProduct } from '@/modules/recommended-product/domain/recommended-product';
import { RelatedProduct } from '@/modules/related-product/domain/related-product';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';
import { SpecialOffer } from '@/modules/special-offer/domain/special-offer';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';
import { UserCart } from '@/modules/user-cart/domain/user-cart';
import { WonderfulOffer } from '@/modules/wonderful-offer/domain/wonderful-offer';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@InputType('ProductDomain')
@FilterableUnPagedRelation('subproducts', () => Subproduct)
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
})
@ObjectType()
export class Product {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @FilterableField()
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

  @FilterableField({ nullable: true })
  isCarpetPad?: number;

  @FilterableField()
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

  @FilterableField()
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

  @Field(() => [AttributeProduct])
  attributeProducts: AttributeProduct[];

  @Field(() => [CouponSubject])
  couponSubjects: CouponSubject[];

  @Field(() => [CustomerImageProduct])
  customerImageProducts: CustomerImageProduct[];

  @Field(() => [CustomerVideoProduct])
  customerVideoProducts: CustomerVideoProduct[];

  @Field(() => [DiscountNotification])
  discountNotifications: DiscountNotification[];

  @Field(() => [DiscountSubject])
  discountSubjects: DiscountSubject[];

  @Field(() => [FavoriteProduct])
  favoriteProducts: FavoriteProduct[];

  @Field(() => [HomePageCustomerImage])
  homePageCustomerImages: HomePageCustomerImage[];

  @Field(() => [ImageProduct])
  imageProducts: ImageProduct[];

  @Field(() => [IncredibleOffer])
  incredibleOffers: IncredibleOffer[];

  @Field(() => [InvoiceProductHistory])
  invoiceProductHistories: InvoiceProductHistory[];

  @Field(() => [InvoiceProductHistory])
  invoiceProductHistories2: InvoiceProductHistory[];

  @Field(() => [InvoiceProduct])
  invoiceProducts: InvoiceProduct[];

  @Field(() => [InvoiceProduct])
  invoiceProducts2: InvoiceProduct[];

  @Field(() => [LabelProduct])
  labelProducts: LabelProduct[];

  @Field(() => [OutOfStockButListedProduct])
  outOfStockButListedProducts: OutOfStockButListedProduct[];

  @Field(() => [Preorder])
  preorders: Preorder[];

  @Field(() => [ProductColorImage])
  productColorImages: ProductColorImage[];

  @Field(() => [ProductColorSale])
  productColorSales: ProductColorSale[];

  @Field(() => [ProductComment])
  productComments: ProductComment[];

  @Field(() => [ProductLike])
  productLikes: ProductLike[];

  @Field(() => [ProductProductCategory])
  productProductCategories: ProductProductCategory[];

  @Field(() => [ProductRate])
  productRates: ProductRate[];

  @Field(() => [ProductRateAverage])
  productRateAverages: ProductRateAverage[];

  @Field(() => [ProductTag])
  productTags: ProductTag[];

  @Field(() => [ProductVideo])
  productVideos: ProductVideo[];

  @Field(() => BasicCarpetColor)
  bestSellerColor: BasicCarpetColor;

  @Field(() => Image)
  image: Image;

  @Field(() => BasicCarpetSize)
  minBasicCarpetSize: BasicCarpetSize;

  @Field(() => Product, { nullable: true })
  parentProduct?: Product;

  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @Field(() => PriceGroup)
  priceGroup: PriceGroup;

  @Field(() => [ReadyToSendProduct])
  readyToSendProducts: ReadyToSendProduct[];

  @Field(() => [RecommendedProduct])
  recommendedProducts: RecommendedProduct[];

  @Field(() => [RelatedProduct])
  relatedProducts: RelatedProduct[];

  @Field(() => [RelatedProduct])
  relatedProducts2: RelatedProduct[];

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItem])
  returnRequestItems: ReturnRequestItem[];

  @Field(() => [ReturnedInvoiceProduct])
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @Field(() => [SpecialOffer])
  specialOffers: SpecialOffer[];

  @Field(() => [SpecialOffer])
  specialOffers2: SpecialOffer[];

  @Field(() => [Subproduct])
  subproducts: Subproduct[];

  @Field(() => [TorobProduct])
  torobProducts: TorobProduct[];

  @Field(() => [UserCart])
  userCarts: UserCart[];

  @Field(() => [UserCart])
  userCarts2: UserCart[];

  @Field(() => [WonderfulOffer])
  wonderfulOffers: WonderfulOffer[];
}
