import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('image_id', ['imageId'], {})
@Index('products_best_seller_color_id_index', ['bestSellerColorId'], {})
@Index(
  'products_id_min_basic_carpet_size_id_unique',
  ['id', 'minBasicCarpetSizeId'],
  { unique: true },
)
@Index('products_idx1', ['isCarpetPad'], {})
@Index('products_idx2', ['id', 'minBasicCarpetSizeId'], { unique: true })
@Index('products_image_id_index', ['imageId'], {})
@Index('products_is_active_index', ['isActive'], {})
@Index('products_is_carpet_pad_index', ['isCarpetPad'], {})
@Index(
  'products_is_self_employed_designer_index',
  ['isSelfEmployedDesigner'],
  {},
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
  isCarpetPad?: boolean;

  @Column('tinyint', { name: 'is_shaggy', width: 1, default: () => "'0'" })
  isShaggy: boolean;

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
  carpetHasRoots: boolean;

  @Column('int', { name: 'parent_product_id', nullable: true, unsigned: true })
  parentProductId?: number;

  @Column('varchar', { name: 'url_slug', nullable: true, length: 191 })
  urlSlug?: string;

  @Column('varchar', { name: 'emalls_title', nullable: true, length: 191 })
  emallsTitle?: string;

  @Column('tinyint', { name: 'emalls_active', width: 1, default: () => "'0'" })
  emallsActive: boolean;

  @Column('tinyint', {
    name: 'snapppay_active',
    width: 1,
    default: () => "'0'",
  })
  snapppayActive: boolean;

  @Column('tinyint', { name: 'snapppay_sort_order', nullable: true, width: 1 })
  snapppaySortOrder?: boolean;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

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
}
