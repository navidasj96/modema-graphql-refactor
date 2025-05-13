import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/domain/attribute-subproduct';
import { ColorCategorySubproduct } from '@/modules/color-category-subproduct/domain/color-category-subproduct';
import { CouponSubject } from '@/modules/coupon-subject/domain/coupon-subject';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { FavoriteProduct } from '@/modules/favorite-product/domain/favorite-product';
import { ImageSubproduct } from '@/modules/image-subproduct/domain/image-subproduct';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct';
import { Preorder } from '@/modules/preorder/domain/preorder';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { ProductLike } from '@/modules/product-like/domain/product-like';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';
import { ProductRateAverage } from '@/modules/product-rate-average/domain/product-rate-average';
import { ProductTag } from '@/modules/product-tag/domain/product-tag';
import { RecommendedSubproduct } from '@/modules/recommended-subproduct/domain/recommended-subproduct';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/domain/subproduct-special-image';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';
import { SubproductVideo } from '@/modules/subproduct-video/domain/subproduct-video';
import { BasicCarpetBorder } from '@/modules/basic-carpet-border/domain/basic-carpet-border';
import { BasicCarpetBrand } from '@/modules/basic-carpet-brand/domain/basic-carpet-brand';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer';
import { BasicCarpetDesign } from '@/modules/basic-carpet-design/domain/basic-carpet-design';
import { BasicCarpetMaterial } from '@/modules/basic-carpet-material/domain/basic-carpet-material';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { BasicCarpetType } from '@/modules/basic-carpet-type/domain/basic-carpet-type';
import { Image } from '@/modules/image/domain/image';
import { Product } from '@/modules/product/domain/product';
import { Video } from '@/modules/video/domain/video';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';
import { UserCart } from '@/modules/user-cart/domain/user-cart';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@InputType('SubproductDomain')
@FilterableUnPagedRelation('basicCarpetColor', () => BasicCarpetColor)
@FilterableUnPagedRelation('basicCarpetSize', () => BasicCarpetSize)
@FilterableUnPagedRelation('image', () => Image)
@FilterableUnPagedRelation('product', () => Product)
@QueryOptions({ pagingStrategy: PagingStrategies.NONE })
@ObjectType()
export class Subproduct {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  imageId?: number;

  @FilterableField({ nullable: true })
  videoId?: number;

  @FilterableField()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field({ nullable: true })
  price?: string;

  @Field()
  padPrice: string;

  @Field({ nullable: true })
  bundlePrice?: string;

  @Field({ nullable: true })
  bundlePadPrice?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  saleCount: number;

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

  @Field({ nullable: true })
  basicCarpetTypeId?: number;

  @Field({ nullable: true })
  basicCarpetDesignId?: number;

  @Field({ nullable: true })
  basicCarpetDesignerId?: number;

  @Field({ nullable: true })
  basicCarpetMaterialId?: number;

  @FilterableField({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @FilterableField({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  shortCode?: string;

  @Field({ nullable: true })
  basicCarpetBrandId?: number;

  @Field({ nullable: true })
  basicCarpetBorderId?: number;

  @Field({ nullable: true })
  borderColor?: string;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  stockCount?: number;

  @Field()
  isOutOfStock: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  mainImageChanged?: boolean;

  @Field()
  otherImagesChanged: boolean;

  @Field({ nullable: true })
  colorCategoriesChanged?: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field()
  getStockCountFromSepidar: boolean;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  searchNameEn?: string;

  @Field({ nullable: true })
  colorNameEs?: string;

  @Field(() => [AttributeSubproduct])
  attributeSubproducts: AttributeSubproduct[];

  @Field(() => [ColorCategorySubproduct])
  colorCategorySubproducts: ColorCategorySubproduct[];

  @Field(() => [CouponSubject])
  couponSubjects: CouponSubject[];

  @Field(() => [DiscountSubject])
  discountSubjects: DiscountSubject[];

  @Field(() => [FavoriteProduct])
  favoriteProducts: FavoriteProduct[];

  @Field(() => [ImageSubproduct])
  imageSubproducts: ImageSubproduct[];

  @Field(() => [InvoiceProductHistory])
  invoiceProductHistories: InvoiceProductHistory[];

  @Field(() => [InvoiceProduct])
  invoiceProducts: InvoiceProduct[];

  @Field(() => [NeedsPhotographySubproduct])
  needsPhotographySubproducts: NeedsPhotographySubproduct[];

  @Field(() => [Preorder])
  preorders: Preorder[];

  @Field(() => [ProductComment])
  productComments: ProductComment[];

  @Field(() => [ProductLike])
  productLikes: ProductLike[];

  @Field(() => [ProductRate])
  productRates: ProductRate[];

  @Field(() => [ProductRateAverage])
  productRateAverages: ProductRateAverage[];

  @Field(() => [ProductTag])
  productTags: ProductTag[];

  @Field(() => [RecommendedSubproduct])
  recommendedSubproducts: RecommendedSubproduct[];

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItem])
  returnRequestItems: ReturnRequestItem[];

  @Field(() => [ReturnedInvoiceProduct])
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @Field(() => [SubproductSpecialImage])
  subproductSpecialImages: SubproductSpecialImage[];

  @Field(() => [SubproductStockHistory])
  subproductStockHistories: SubproductStockHistory[];

  @Field(() => [SubproductVideo])
  subproductVideos: SubproductVideo[];

  @Field(() => BasicCarpetBorder)
  basicCarpetBorder: BasicCarpetBorder;

  @Field(() => BasicCarpetBrand)
  basicCarpetBrand: BasicCarpetBrand;

  @Field(() => BasicCarpetColor)
  basicCarpetColor: BasicCarpetColor;

  @Field(() => BasicCarpetDesigner)
  basicCarpetDesigner: BasicCarpetDesigner;

  @Field(() => BasicCarpetDesign)
  basicCarpetDesign: BasicCarpetDesign;

  @Field(() => BasicCarpetMaterial)
  basicCarpetMaterial: BasicCarpetMaterial;

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => BasicCarpetType)
  basicCarpetType: BasicCarpetType;

  @Field(() => Image)
  image: Image;

  @Field(() => Product)
  product: Product;

  @Field(() => Video)
  video: Video;

  @Field(() => [TorobProduct])
  torobProducts: TorobProduct[];

  @Field(() => [UserCart])
  userCarts: UserCart[];

  @Field(() => [UserCart])
  userCarts2: UserCart[];
}
