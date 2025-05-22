import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeProduct } from '@/modules/attribute-product/entities/attribute-product.entity';
import { CouponSubject } from '@/modules/coupon-subject/entities/coupon-subject.entity';
import { CustomerImageProduct } from '@/modules/customer-image-product/entities/customer-image-product.entity';
import { CustomerVideoProduct } from '@/modules/customer-video-product/entities/customer-video-product.entity';
import { DiscountNotification } from '@/modules/discount-notification/entities/discount-notification.entity';
import { DiscountSubject } from '@/modules/discount-subject/entities/discount-subject.entity';
import { FavoriteProduct } from '@/modules/favorite-product/entities/favorite-product.entity';
import { HomePageCustomerImage } from '@/modules/home-page-customer-image/entities/home-page-customer-image.entity';
import { ImageProduct } from '@/modules/image-product/entities/image-product.entity';
import { IncredibleOffer } from '@/modules/incredible-offer/entities/incredible-offer.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { LabelProduct } from '@/modules/label-product/entities/label-product.entity';
import { ProductProductCategory } from '@/modules/product-product-category/entities/product-product-category.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductTag } from '@/modules/product-tag/entities/product-tag.entity';
import { ProductVideo } from '@/modules/product-video/entities/product-video.entity';
import { OutOfStockButListedProduct } from '@/modules/out-of-stock-but-listed-product/entities/out-of-stock-but-listed-product.entity';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { ProductColorImage } from '@/modules/product-color-image/entities/product-color-image.entity';
import { ProductColorSale } from '@/modules/product-color-sale/entities/product-color-sale.entity';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { ProductLike } from '@/modules/product-like/entities/product-like.entity';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { PriceGroup } from '@/modules/price-group/entities/price-group.entity';
import { ReadyToSendProduct } from '@/modules/ready-to-send-product/entities/ready-to-send-product.entity';
import { RecommendedProduct } from '@/modules/recommended-product/entities/recommended-product.entity';
import { RelatedProduct } from '@/modules/related-product/entities/related-product.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/entities/returned-invoice-product.entity';
import { SpecialOffer } from '@/modules/special-offer/entities/special-offer.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { TorobProduct } from '@/modules/torob-product/entities/torob-product.entity';
import { UserCart } from '@/modules/user-cart/entities/user-cart.entity';
import { WonderfulOffer } from '@/modules/wonderful-offer/entities/wonderful-offer.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';

@Index('id', ['id'], {})
@Index('image_id', ['imageId'], {})
@Index('products_best_seller_color_id_index', ['bestSellerColorId'], {})
@Index(
  'products_id_min_basic_carpet_size_id_unique',
  ['id', 'minBasicCarpetSizeId'],
  { unique: true }
)
@Index('products_idx1', ['isCarpetPad'], {})
@Index('products_idx2', ['id', 'minBasicCarpetSizeId'], { unique: true })
@Index('products_image_id_index', ['imageId'], {})
@Index('products_is_active_index', ['isActive'], {})
@Index('products_is_carpet_pad_index', ['isCarpetPad'], {})
@Index(
  'products_is_self_employed_designer_index',
  ['isSelfEmployedDesigner'],
  {}
)
@Index('products_is_shaggy_index', ['isShaggy'], {})
@Index('products_min_basic_carpet_size_id_index', ['minBasicCarpetSizeId'], {})
@Index('products_name_es_unique', ['nameEs'], { unique: true })
@Index('products_name_unique', ['name'], { unique: true })
@Index('products_parent_product_id_index', ['parentProductId'], {})
@Index('products_price_group_id_index', ['priceGroupId'], {})
@Index('products_russian_name_unique', ['russianName'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('products', { schema: 'modema' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('varchar', { name: 'search_name', nullable: true, length: 191 })
  searchName?: string;

  @Column('varchar', {
    name: 'russian_name',
    nullable: true,
    unique: true,
    length: 191,
  })
  russianName?: string;

  @Column('decimal', { name: 'price', nullable: true, precision: 18, scale: 2 })
  price?: string;

  @Column('int', { name: 'price_group_id', nullable: true, unsigned: true })
  priceGroupId?: number;

  @Column('longtext', { name: 'description', nullable: true })
  description?: string;

  @Column('int', { name: 'sale_count', unsigned: true, default: () => "'0'" })
  saleCount: number;

  @Column('int', { name: 'sale_count_daily', default: () => "'0'" })
  saleCountDaily: number;

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
    comment: 'Must fill with cron jobs.',
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
      "if this product's size is customizable, width and length fields are locked and are given by user when ordering this product, also the price is calculated using per_inch_price in settings.",
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

  @Column('tinyint', {
    name: 'designer_is_general',
    unsigned: true,
    default: () => "'0'",
  })
  designerIsGeneral: number;

  @Column('varchar', { name: 'collection_name', nullable: true, length: 191 })
  collectionName?: string;

  @Column('tinyint', {
    name: 'is_self_employed_designer',
    unsigned: true,
    default: () => "'0'",
  })
  isSelfEmployedDesigner: number;

  @Column('tinyint', {
    name: 'is_carpet_pad',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isCarpetPad?: number;

  @Column('tinyint', { name: 'is_shaggy', width: 1, default: () => "'0'" })
  isShaggy: number;

  @Column('text', { name: 'meta_tags', nullable: true })
  metaTags?: string;

  @Column('varchar', { name: 'page_title', nullable: true, length: 191 })
  pageTitle?: string;

  @Column('int', {
    name: 'view_counter',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter?: number;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('int', {
    name: 'min_basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  minBasicCarpetSizeId?: number;

  @Column('int', {
    name: 'best_seller_color_id',
    nullable: true,
    unsigned: true,
  })
  bestSellerColorId?: number;

  @Column('tinyint', {
    name: 'carpet_has_roots',
    width: 1,
    default: () => "'0'",
  })
  carpetHasRoots: number;

  @Column('int', { name: 'parent_product_id', nullable: true, unsigned: true })
  parentProductId?: number;

  @Column('varchar', { name: 'url_slug', nullable: true, length: 191 })
  urlSlug?: string;

  @Column('varchar', { name: 'emalls_title', nullable: true, length: 191 })
  emallsTitle?: string;

  @Column('tinyint', { name: 'emalls_active', width: 1, default: () => "'0'" })
  emallsActive: number;

  @Column('tinyint', {
    name: 'snapppay_active',
    width: 1,
    default: () => "'0'",
  })
  snapppayActive: number;

  @Column('tinyint', { name: 'snapppay_sort_order', nullable: true, width: 1 })
  snapppaySortOrder?: number;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: number;

  @Column('datetime', {
    name: 'active_updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  activeUpdatedAt: Date;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', {
    name: 'new_subproducts_created',
    unsigned: true,
    default: () => "'0'",
  })
  newSubproductsCreated: number;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn?: string;

  @Column('varchar', { name: 'search_name_en', nullable: true, length: 191 })
  searchNameEn?: string;

  @Column('text', { name: 'meta_tags_en', nullable: true })
  metaTagsEn?: string;

  @Column('varchar', { name: 'page_title_en', nullable: true, length: 191 })
  pageTitleEn?: string;

  @Column('text', { name: 'description_en', nullable: true })
  descriptionEn?: string;

  @Column('varchar', { name: 'url_slug_en', nullable: true, length: 191 })
  urlSlugEn?: string;

  @Column('varchar', {
    name: 'name_es',
    nullable: true,
    unique: true,
    length: 191,
  })
  nameEs?: string;

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.product
  )
  attributeProducts: AttributeProduct[];

  @OneToMany(() => CouponSubject, (couponSubject) => couponSubject.product)
  couponSubjects: CouponSubject[];

  @OneToMany(
    () => CustomerImageProduct,
    (customerImageProduct) => customerImageProduct.product
  )
  customerImageProducts: CustomerImageProduct[];

  @OneToMany(
    () => CustomerVideoProduct,
    (customerVideoProduct) => customerVideoProduct.product
  )
  customerVideoProducts: CustomerVideoProduct[];

  @OneToMany(
    () => DiscountNotification,
    (discountNotification) => discountNotification.product
  )
  discountNotifications: DiscountNotification[];

  @OneToMany(
    () => DiscountSubject,
    (discountSubject) => discountSubject.product
  )
  discountSubjects: DiscountSubject[];

  @OneToMany(
    () => FavoriteProduct,
    (favoriteProduct) => favoriteProduct.product
  )
  favoriteProducts: FavoriteProduct[];

  @OneToMany(
    () => HomePageCustomerImage,
    (homePageCustomerImage) => homePageCustomerImage.product
  )
  homePageCustomerImages: HomePageCustomerImage[];

  @OneToMany(() => ImageProduct, (imageProduct) => imageProduct.product)
  imageProducts: ImageProduct[];

  @OneToMany(
    () => IncredibleOffer,
    (incredibleOffer) => incredibleOffer.product
  )
  incredibleOffers: IncredibleOffer[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.product
  )
  invoiceProductHistories: InvoiceProductHistory[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.relatedProduct
  )
  invoiceProductHistories2: InvoiceProductHistory[];

  @OneToMany(() => InvoiceProduct, (invoiceProducts) => invoiceProducts.product)
  invoiceProducts: InvoiceProduct[];

  @OneToMany(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.relatedProduct
  )
  invoiceProducts2: InvoiceProduct[];

  @OneToMany(() => LabelProduct, (labelProduct) => labelProduct.product)
  labelProducts: LabelProduct[];

  @OneToMany(
    () => OutOfStockButListedProduct,
    (outOfStockButListedProduct) => outOfStockButListedProduct.product
  )
  outOfStockButListedProducts: OutOfStockButListedProduct[];

  @OneToMany(() => Preorder, (preorder) => preorder.product)
  preorders: Preorder[];

  @OneToMany(
    () => ProductColorImage,
    (productColorImage) => productColorImage.product
  )
  productColorImages: ProductColorImage[];

  @OneToMany(
    () => ProductColorSale,
    (productColorSale) => productColorSale.product
  )
  productColorSales: ProductColorSale[];

  @OneToMany(() => ProductComment, (productComment) => productComment.product)
  productComments: ProductComment[];

  @OneToMany(() => ProductLike, (productLike) => productLike.product)
  productLikes: ProductLike[];

  @OneToMany(
    () => ProductProductCategory,
    (productProductCategory) => productProductCategory.product
  )
  productProductCategories: ProductProductCategory[];

  @OneToMany(() => ProductRate, (productRate) => productRate.product)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverage,
    (productRateAverage) => productRateAverage.product
  )
  productRateAverages: ProductRateAverage[];

  @OneToMany(() => ProductTag, (productTag) => productTag.product)
  productTags: ProductTag[];

  @OneToMany(() => ProductVideo, (productVideo) => productVideo.product)
  productVideos: ProductVideo[];

  @ManyToOne(
    () => BasicCarpetColor,
    (basicCarpetColor) => basicCarpetColor.products,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'best_seller_color_id', referencedColumnName: 'id' }])
  bestSellerColor: BasicCarpetColor;

  @ManyToOne(() => Image, (image) => image.products, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.products,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'min_basic_carpet_size_id', referencedColumnName: 'id' },
  ])
  minBasicCarpetSize: BasicCarpetSize;

  @ManyToOne(() => Product, (products) => products.products, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'parent_product_id', referencedColumnName: 'id' }])
  parentProduct: Product;

  @OneToMany(() => Product, (product) => product.parentProduct)
  products: Product[];

  @ManyToOne(() => PriceGroup, (priceGroup) => priceGroup.products, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'price_group_id', referencedColumnName: 'id' }])
  priceGroup: PriceGroup;

  @OneToMany(
    () => ReadyToSendProduct,
    (readyToSendProduct) => readyToSendProduct.product
  )
  readyToSendProducts: ReadyToSendProduct[];

  @OneToMany(
    () => RecommendedProduct,
    (recommendedProduct) => recommendedProduct.product
  )
  recommendedProducts: RecommendedProduct[];

  @OneToMany(() => RelatedProduct, (relatedProduct) => relatedProduct.product)
  relatedProducts: RelatedProduct[];

  @OneToMany(
    () => RelatedProduct,
    (relatedProducts) => relatedProducts.relatedProduct
  )
  relatedProducts2: RelatedProduct[];

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.product
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.product
  )
  returnRequestItems: ReturnRequestItem[];

  @OneToMany(
    () => ReturnedInvoiceProduct,
    (returnedInvoiceProduct) => returnedInvoiceProduct.product
  )
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @OneToMany(
    () => SpecialOffer,
    (specialOffer) => specialOffer.specialOfferProduct
  )
  specialOffers: SpecialOffer[];

  @OneToMany(
    () => SpecialOffer,
    (specialOffer) => specialOffer.wonderfulOfferProduct
  )
  specialOffers2: SpecialOffer[];

  @OneToMany(() => Subproduct, (subproduct) => subproduct.product)
  subproducts: Subproduct[];

  @OneToMany(() => TorobProduct, (torobProduct) => torobProduct.product)
  torobProducts: TorobProduct[];

  @OneToMany(() => UserCart, (userCart) => userCart.product)
  userCarts: UserCart[];

  @OneToMany(() => UserCart, (userCart) => userCart.relatedProduct)
  userCarts2: UserCart[];

  @OneToMany(() => WonderfulOffer, (wonderfulOffer) => wonderfulOffer.product)
  wonderfulOffers: WonderfulOffer[];
}
