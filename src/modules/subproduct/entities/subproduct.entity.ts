import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
  { unique: true },
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
  price?: string;

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
}
