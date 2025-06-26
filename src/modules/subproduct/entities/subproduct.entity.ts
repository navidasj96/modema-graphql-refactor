import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

@Index('basic_carpet_brand_id', ['basicCarpetBrandId'], {})
@Index('basic_carpet_color_id', ['basicCarpetColorId'], {})
@Index('basic_carpet_design_id', ['basicCarpetDesignId'], {})
@Index('basic_carpet_designer_id', ['basicCarpetDesignerId'], {})
@Index('basic_carpet_material_id', ['basicCarpetMaterialId'], {})
@Index('basic_carpet_size_id', ['basicCarpetSizeId'], {})
@Index('basic_carpet_type_id', ['basicCarpetTypeId'], {})
@Index('id', ['id'], {})
@Index('image_id', ['imageId'], {})
@Index('product_id', ['productId'], {})
@Index('product_id_2', ['productId'], {})
@Index('sort_order', ['sortOrder'], {})
@Index('subproducts_basic_carpet_border_id_index', ['basicCarpetBorderId'], {})
@Index('subproducts_bundle_pad_price_index', ['bundlePadPrice'], {})
@Index('subproducts_bundle_price_index', ['bundlePrice'], {})
@Index('subproducts_code_unique', ['code'], { unique: true })
@Index('subproducts_image_id_index', ['imageId'], {})
@Index('subproducts_is_active_index', ['isActive'], {})
@Index('subproducts_name_unique', ['productId', 'name'], { unique: true })
@Index('subproducts_pad_price_index', ['padPrice'], {})
@Index('subproducts_price_index', ['price'], {})
@Index(
  'subproducts_prod_id_size_id_color_id_unique',
  [
    'productId',
    'basicCarpetDesignerId',
    'basicCarpetSizeId',
    'basicCarpetColorId',
  ],
  { unique: true }
)
@Index('subproducts_product_id_index', ['productId'], {})
@Index('subproducts_short_code_index', ['shortCode'], {})
@Index('subproducts_video_id_index', ['videoId'], {})
@Entity('subproducts', { schema: 'modema' })
export class Subproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'video_id', nullable: true, unsigned: true })
  videoId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'search_name', nullable: true, length: 191 })
  searchName?: string;

  @Column('decimal', { name: 'price', nullable: true, precision: 18, scale: 2 })
  price: number | null;

  @Column('decimal', {
    name: 'pad_price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  padPrice: string;

  @Column('decimal', {
    name: 'bundle_price',
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePrice?: string;

  @Column('decimal', {
    name: 'bundle_pad_price',
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePadPrice?: string;

  @Column('longtext', { name: 'description', nullable: true })
  description?: string;

  @Column('int', { name: 'sale_count', unsigned: true, default: () => "'0'" })
  saleCount: number;

  @Column('int', { name: 'total_like', unsigned: true, default: () => "'0'" })
  totalLike: number;

  @Column('int', {
    name: 'total_dislike',
    unsigned: true,
    default: () => "'0'",
  })
  totalDislike: number;

  @Column('double', {
    name: 'rate',
    unsigned: true,
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  rate: number;

  @Column('int', {
    name: 'rate_count',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  rateCount?: number;

  @Column('double', {
    name: 'size',
    unsigned: true,
    precision: 22,
    default: () => "'0'",
  })
  size: number;

  @Column('tinyint', {
    name: 'size_is_customizable',
    comment:
      "if this subproduct's size is customizable, width and length fields are locked and are given by user when ordering this subproduct, also the price is calculated using per_inch_price in settings.",
    unsigned: true,
    default: () => "'0'",
  })
  sizeIsCustomizable: number;

  @Column('double', {
    name: 'width',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  length?: number;

  @Column('varchar', { name: 'colors', nullable: true, length: 191 })
  colors?: string;

  @Column('int', {
    name: 'basic_carpet_type_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetTypeId?: number;

  @Column('int', {
    name: 'basic_carpet_design_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetDesignId?: number;

  @Column('int', {
    name: 'basic_carpet_designer_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetDesignerId?: number;

  @Column('int', {
    name: 'basic_carpet_material_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetMaterialId?: number;

  @Column('int', {
    name: 'basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId?: number;

  @Column('int', {
    name: 'basic_carpet_color_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId?: number;

  @Column('varchar', {
    name: 'code',
    nullable: true,
    unique: true,
    length: 191,
  })
  code?: string;

  @Column('varchar', { name: 'short_code', nullable: true, length: 191 })
  shortCode?: string;

  @Column('int', {
    name: 'basic_carpet_brand_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetBrandId?: number;

  @Column('int', {
    name: 'basic_carpet_border_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetBorderId?: number;

  @Column('varchar', { name: 'border_color', nullable: true, length: 191 })
  borderColor?: string;

  @Column('varchar', { name: 'color_name', nullable: true, length: 191 })
  colorName?: string;

  @Column('int', { name: 'stock_count', nullable: true, default: () => "'0'" })
  stockCount?: number;

  @Column('tinyint', {
    name: 'is_out_of_stock',
    width: 1,
    default: () => "'0'",
  })
  isOutOfStock: boolean;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', {
    name: 'main_image_changed',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  mainImageChanged?: boolean;

  @Column('tinyint', {
    name: 'other_images_changed',
    width: 1,
    default: () => "'0'",
  })
  otherImagesChanged: boolean;

  @Column('tinyint', {
    name: 'color_categories_changed',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  colorCategoriesChanged?: number;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('tinyint', {
    name: 'get_stock_count_from_sepidar',
    width: 1,
    default: () => "'1'",
  })
  getStockCountFromSepidar: boolean;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn?: string;

  @Column('varchar', { name: 'search_name_en', nullable: true, length: 191 })
  searchNameEn?: string;

  @Column('varchar', { name: 'color_name_es', nullable: true, length: 191 })
  colorNameEs?: string;

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.subproduct
  )
  attributeSubproducts: AttributeSubproduct[];

  @OneToMany(
    () => ColorCategorySubproduct,
    (colorCategorySubproduct) => colorCategorySubproduct.subproduct
  )
  colorCategorySubproducts: ColorCategorySubproduct[];

  @OneToMany(() => CouponSubject, (couponSubject) => couponSubject.subproduct)
  couponSubjects: CouponSubject[];

  @OneToMany(
    () => DiscountSubject,
    (discountSubject) => discountSubject.subproduct
  )
  discountSubjects: DiscountSubject[];

  @OneToMany(
    () => FavoriteProduct,
    (favoriteProduct) => favoriteProduct.subproduct
  )
  favoriteProducts: FavoriteProduct[];

  @OneToMany(
    () => ImageSubproduct,
    (imageSubproduct) => imageSubproduct.subproduct
  )
  imageSubproducts: ImageSubproduct[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.relatedSubproduct
  )
  invoiceProductHistories: InvoiceProductHistory[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.subproduct
  )
  invoiceProductHistories2: InvoiceProductHistory[];

  @OneToMany(() => InvoiceProduct, (invoiceProduct) => invoiceProduct.pad)
  invoiceProducts: InvoiceProduct[];

  @OneToMany(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.relatedSubproduct
  )
  invoiceProducts2: InvoiceProduct[];

  @OneToMany(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.subproduct
  )
  invoiceProducts3: InvoiceProduct[];

  @OneToMany(
    () => NeedsPhotographySubproduct,
    (needsPhotographySubproduct) => needsPhotographySubproduct.subproduct
  )
  needsPhotographySubproducts: NeedsPhotographySubproduct[];

  @OneToMany(() => Preorder, (preorder) => preorder.subproduct)
  preorders: Preorder[];

  @OneToMany(
    () => ProductComment,
    (productComment) => productComment.subproduct
  )
  productComments: ProductComment[];

  @OneToMany(() => ProductLike, (productLike) => productLike.subproduct)
  productLikes: ProductLike[];

  @OneToMany(() => ProductRate, (productRate) => productRate.subproduct)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverage,
    (productRateAverage) => productRateAverage.subproduct
  )
  productRateAverages: ProductRateAverage[];

  @OneToMany(() => ProductTag, (productTag) => productTag.subproduct)
  productTags: ProductTag[];

  @OneToMany(
    () => RecommendedSubproduct,
    (recommendedSubproduct) => recommendedSubproduct.subproduct
  )
  recommendedSubproducts: RecommendedSubproduct[];

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.subproduct
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.subproduct
  )
  returnRequestItems: ReturnRequestItem[];

  @OneToMany(
    () => ReturnedInvoiceProduct,
    (returnedInvoiceProduct) => returnedInvoiceProduct.subproduct
  )
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @OneToMany(
    () => SubproductSpecialImage,
    (subproductSpecialImage) => subproductSpecialImage.subproduct
  )
  subproductSpecialImages: SubproductSpecialImage[];

  @OneToMany(
    () => SubproductStockHistory,
    (subproductStockHistory) => subproductStockHistory.subproduct
  )
  subproductStockHistories: SubproductStockHistory[];

  @OneToMany(
    () => SubproductVideo,
    (subproductVideo) => subproductVideo.subproduct
  )
  subproductVideos: SubproductVideo[];

  @ManyToOne(
    () => BasicCarpetBorder,
    (basicCarpetBorder) => basicCarpetBorder.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'basic_carpet_border_id', referencedColumnName: 'id' }])
  basicCarpetBorder: BasicCarpetBorder;

  @ManyToOne(
    () => BasicCarpetBrand,
    (basicCarpetBrand) => basicCarpetBrand.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_brand_id', referencedColumnName: 'id' }])
  basicCarpetBrand: BasicCarpetBrand;

  @ManyToOne(
    () => BasicCarpetColor,
    (basicCarpetColor) => basicCarpetColor.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_color_id', referencedColumnName: 'id' }])
  basicCarpetColor: BasicCarpetColor;

  @ManyToOne(
    () => BasicCarpetDesigner,
    (basicCarpetDesigner) => basicCarpetDesigner.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([
    { name: 'basic_carpet_designer_id', referencedColumnName: 'id' },
  ])
  basicCarpetDesigner: BasicCarpetDesigner;

  @ManyToOne(
    () => BasicCarpetDesign,
    (basicCarpetDesign) => basicCarpetDesign.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_design_id', referencedColumnName: 'id' }])
  basicCarpetDesign: BasicCarpetDesign;

  @ManyToOne(
    () => BasicCarpetMaterial,
    (basicCarpetMaterial) => basicCarpetMaterial.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([
    { name: 'basic_carpet_material_id', referencedColumnName: 'id' },
  ])
  basicCarpetMaterial: BasicCarpetMaterial;

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(
    () => BasicCarpetType,
    (basicCarpetType) => basicCarpetType.subproducts,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_type_id', referencedColumnName: 'id' }])
  basicCarpetType: BasicCarpetType;

  @ManyToOne(() => Image, (image) => image.subproducts, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(() => Product, (product) => product.subproducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Video, (video) => video.subproducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'video_id', referencedColumnName: 'id' }])
  video: Video;

  @OneToMany(() => TorobProduct, (torobProduct) => torobProduct.subproduct)
  torobProducts: TorobProduct[];

  @OneToMany(() => UserCart, (userCart) => userCart.relatedSubproduct)
  userCarts: UserCart[];

  @OneToMany(() => UserCart, (userCart) => userCart.subproduct)
  userCarts2: UserCart[];
}
