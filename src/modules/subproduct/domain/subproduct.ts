import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/entities/attribute-subproduct.entity';
import { ColorCategorySubproduct } from '@/modules/color-category-subproduct/entities/color-category-subproduct.entity';
import { CouponSubject } from '@/modules/coupon-subject/entities/coupon-subject.entity';
import { DiscountSubject } from '@/modules/discount-subject/entities/discount-subject.entity';
import { FavoriteProduct } from '@/modules/favorite-product/entities/favorite-product.entity';
import { ImageSubproduct } from '@/modules/image-subproduct/entities/image-subproduct.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/entities/needs-photography-subproduct.entity';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { ProductLike } from '@/modules/product-like/entities/product-like.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';
import { ProductTag } from '@/modules/product-tag/entities/product-tag.entity';
import { RecommendedSubproduct } from '@/modules/recommended-subproduct/entities/recommended-subproduct.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/entities/returned-invoice-product.entity';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/entities/subproduct-special-image.entity';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/entities/subproduct-stock-history.entity';
import { SubproductVideo } from '@/modules/subproduct-video/entities/subproduct-video.entity';
import { BasicCarpetBorder } from '@/modules/basic-carpet-border/entities/basic-carpet-border.entity';
import { BasicCarpetBrand } from '@/modules/basic-carpet-brand/entities/basic-carpet-brand.entity';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/entities/basic-carpet-designer.entity';
import { BasicCarpetDesign } from '@/modules/basic-carpet-design/entities/basic-carpet-design.entity';
import { BasicCarpetMaterial } from '@/modules/basic-carpet-material/entities/basic-carpet-material.entity';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { BasicCarpetType } from '@/modules/basic-carpet-type/entities/basic-carpet-type.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Video } from '@/modules/video/entities/video.entity';
import { TorobProduct } from '@/modules/torob-product/entities/torob-product.entity';
import { UserCart } from '@/modules/user-cart/entities/user-cart.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';

@InputType('SubproductDomain')
@ObjectType()
export class Subproduct {
  @IDField(() => ID)
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
