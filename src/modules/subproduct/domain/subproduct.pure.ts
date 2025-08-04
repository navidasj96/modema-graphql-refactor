import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { AttributeSubproductPure } from '@/modules/attribute-subproduct/domain/attribute-subproduct.pure';
import { BasicCarpetBorderPure } from '@/modules/basic-carpet-border/domain/basic-carpet-border.pure';
import { BasicCarpetBrandPure } from '@/modules/basic-carpet-brand/domain/basic-carpet-brand.pure';
import { BasicCarpetColorPure } from '@/modules/basic-carpet-color/domain/basic-carpet-color.pure';
import { BasicCarpetDesignPure } from '@/modules/basic-carpet-design/domain/basic-carpet-design.pure';
import { BasicCarpetDesignerPure } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer.pure';
import { BasicCarpetMaterialPure } from '@/modules/basic-carpet-material/domain/basic-carpet-material.pure';
import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { BasicCarpetTypePure } from '@/modules/basic-carpet-type/domain/basic-carpet-type.pure';
import { ColorCategorySubproductPure } from '@/modules/color-category-subproduct/domain/color-category-subproduct.pure';
import { CouponSubjectPure } from '@/modules/coupon-subject/domain/coupon-subject.pure';
import { DiscountSubjectPure } from '@/modules/discount-subject/domain/discount-subject.pure';
import { FavoriteProductPure } from '@/modules/favorite-product/domain/favorite-product.pure';
import { ImageSubproductPure } from '@/modules/image-subproduct/domain/image-subproduct.pure';
import { ImagePure } from '@/modules/image/domain/image.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { NeedsPhotographySubproductPure } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct.pure';
import { PreorderPure } from '@/modules/preorder/domain/preorder.pure';
import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { ProductLikePure } from '@/modules/product-like/domain/product-like.pure';
import { ProductRateAveragePure } from '@/modules/product-rate-average/domain/product-rate-average.pure';
import { ProductRatePure } from '@/modules/product-rate/domain/product-rate.pure';
import { ProductTagPure } from '@/modules/product-tag/domain/product-tag.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { RecommendedSubproductPure } from '@/modules/recommended-subproduct/domain/recommended-subproduct.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnedInvoiceProductPure } from '@/modules/returned-invoice-product/domain/returned-invoice-product.pure';
import { SubproductSpecialImagePure } from '@/modules/subproduct-special-image/domain/subproduct-special-image.pure';
import { SubproductStockHistoryPure } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history.pure';
import { SubproductVideoPure } from '@/modules/subproduct-video/domain/subproduct-video.pure';
import { TorobProductPure } from '@/modules/torob-product/domain/torob-product.pure';
import { UserCartPure } from '@/modules/user-cart/domain/user-cart.pure';
import { VideoPure } from '@/modules/video/domain/video.pure';

@InputType('SubproductPureDomain')
@ObjectType()
export class SubproductPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  videoId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field(() => Number, { nullable: true })
  price: number | null;

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

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
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
  isOutOfStock: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  mainImageChanged?: number;

  @Field()
  otherImagesChanged: number;

  @Field({ nullable: true })
  colorCategoriesChanged?: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field()
  getStockCountFromSepidar: number;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  searchNameEn?: string;

  @Field({ nullable: true })
  colorNameEs?: string;

  @Field(() => [AttributeSubproductPure])
  attributeSubproducts: AttributeSubproductPure[];

  @Field(() => [ColorCategorySubproductPure])
  colorCategorySubproducts: ColorCategorySubproductPure[];

  @Field(() => [CouponSubjectPure])
  couponSubjects: CouponSubjectPure[];

  @Field(() => [DiscountSubjectPure])
  discountSubjects: DiscountSubjectPure[];

  @Field(() => [FavoriteProductPure])
  favoriteProducts: FavoriteProductPure[];

  @Field(() => [ImageSubproductPure])
  imageSubproducts: ImageSubproductPure[];

  @Field(() => [InvoiceProductHistoryPure])
  invoiceProductHistories: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductPure])
  invoiceProducts: InvoiceProductPure[];

  @Field(() => [NeedsPhotographySubproductPure])
  needsPhotographySubproducts: NeedsPhotographySubproductPure[];

  @Field(() => [PreorderPure])
  preorders: PreorderPure[];

  @Field(() => [ProductCommentPure])
  productComments: ProductCommentPure[];

  @Field(() => [ProductLikePure])
  productLikes: ProductLikePure[];

  @Field(() => [ProductRatePure])
  productRates: ProductRatePure[];

  @Field(() => [ProductRateAveragePure])
  productRateAverages: ProductRateAveragePure[];

  @Field(() => [ProductTagPure])
  productTags: ProductTagPure[];

  @Field(() => [RecommendedSubproductPure])
  recommendedSubproducts: RecommendedSubproductPure[];

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemPure])
  returnRequestItems: ReturnRequestItemPure[];

  @Field(() => [ReturnedInvoiceProductPure])
  returnedInvoiceProducts: ReturnedInvoiceProductPure[];

  @Field(() => [SubproductSpecialImagePure])
  subproductSpecialImages: SubproductSpecialImagePure[];

  @Field(() => [SubproductStockHistoryPure])
  subproductStockHistories: SubproductStockHistoryPure[];

  @Field(() => [SubproductVideoPure])
  subproductVideos: SubproductVideoPure[];

  @Field(() => BasicCarpetBorderPure)
  basicCarpetBorder: BasicCarpetBorderPure;

  @Field(() => BasicCarpetBrandPure)
  basicCarpetBrand: BasicCarpetBrandPure;

  @Field(() => BasicCarpetColorPure)
  basicCarpetColor: BasicCarpetColorPure;

  @Field(() => BasicCarpetDesignerPure)
  basicCarpetDesigner: BasicCarpetDesignerPure;

  @Field(() => BasicCarpetDesignPure)
  basicCarpetDesign: BasicCarpetDesignPure;

  @Field(() => BasicCarpetMaterialPure)
  basicCarpetMaterial: BasicCarpetMaterialPure;

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => BasicCarpetTypePure)
  basicCarpetType: BasicCarpetTypePure;

  @Field(() => ImagePure)
  image: ImagePure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => VideoPure)
  video: VideoPure;

  @Field(() => [TorobProductPure])
  torobProducts: TorobProductPure[];

  @Field(() => [UserCartPure])
  userCarts: UserCartPure[];

  @Field(() => [UserCartPure])
  userCarts2: UserCartPure[];
}
