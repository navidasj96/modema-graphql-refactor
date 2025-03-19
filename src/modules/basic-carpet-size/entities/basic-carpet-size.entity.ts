import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CampaignFreeOfferSize } from '@/modules/campaign-free-offer-size/entities/campaign-free-offer-size.entity';
import { CouponSubject } from '@/modules/coupon-subject/entities/coupon-subject.entity';
import { DesignersProductPriceRange } from '@/modules/designers-product-price-range/entities/designers-product-price-range.entity';
import { DiscountSubject } from '@/modules/discount-subject/entities/discount-subject.entity';
import { PriceGroupSize } from '@/modules/price-group-size/entities/price-group-size.entity';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { TorobProduct } from '@/modules/torob-product/entities/torob-product.entity';
import { BasicCarpetSizeDetail } from '@/modules/basic-carpet-size-detail/entities/basic-carpet-size-detail.entity';
import { Image } from '@/modules/image/entities/image.entity';

@Index('basic_carpet_sizes_code_unique', ['code'], { unique: true })
@Index('basic_carpet_sizes_image_id_foreign', ['imageId'], {})
@Index('basic_carpet_sizes_length_index', ['length'], {})
@Index('basic_carpet_sizes_mobile_image_id_foreign', ['mobileImageId'], {})
@Index('basic_carpet_sizes_title_unique', ['title'], { unique: true })
@Index('basic_carpet_sizes_width_index', ['width'], {})
@Index('basic_carpet_sizes_width_length_unique', ['width', 'length'], {
  unique: true,
})
@Index('code', ['code'], {})
@Index('id', ['id'], {})
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_sizes', { schema: 'modema' })
export class BasicCarpetSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 2 })
  code: string;

  @Column('double', { name: 'width', unsigned: true, precision: 22 })
  width: number;

  @Column('double', { name: 'length', unsigned: true, precision: 22 })
  length: number;

  @Column('double', {
    name: 'carpet_volume',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  carpetVolume?: number;

  @Column('double', {
    name: 'pad_volume',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  padVolume?: number;

  @Column('double', { name: 'unit_ratio', precision: 22 })
  unitRatio: number;

  @Column('int', { name: 'view_counter', default: () => "'0'" })
  viewCounter: number;

  @Column('varchar', { name: 'size_text', nullable: true, length: 191 })
  sizeText?: string;

  @Column('varchar', { name: 'width_text', nullable: true, length: 191 })
  widthText?: string;

  @Column('varchar', { name: 'length_text', nullable: true, length: 191 })
  lengthText?: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 191 })
  altText?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'mobile_image_id', nullable: true, unsigned: true })
  mobileImageId?: number;

  @Column('int', { name: 'homepage_image_id', nullable: true, unsigned: true })
  homepageImageId?: number;

  @Column('text', { name: 'meta_tags', nullable: true })
  metaTags?: string;

  @Column('varchar', { name: 'page_title', nullable: true, length: 191 })
  pageTitle?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('varchar', { name: 'url_slug', nullable: true, length: 191 })
  urlSlug?: string;

  @Column('varchar', { name: 'title_en', nullable: true, length: 191 })
  titleEn?: string;

  @Column('varchar', { name: 'alt_text_en', nullable: true, length: 191 })
  altTextEn?: string;

  @Column('text', { name: 'meta_tags_en', nullable: true })
  metaTagsEn?: string;

  @Column('varchar', { name: 'page_title_en', nullable: true, length: 191 })
  pageTitleEn?: string;

  @Column('text', { name: 'description_en', nullable: true })
  descriptionEn?: string;

  @Column('varchar', { name: 'url_slug_en', nullable: true, length: 191 })
  urlSlugEn?: string;

  @Column('varchar', { name: 'size_text_en', nullable: true, length: 191 })
  sizeTextEn?: string;

  @OneToMany(
    () => BasicCarpetSizeDetail,
    (basicCarpetSizeDetail) => basicCarpetSizeDetail.basicCarpetSize,
  )
  basicCarpetSizeDetails: BasicCarpetSizeDetail[];

  @ManyToOne(() => Image, (image) => image.basicCarpetSizes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(() => Image, (image) => image.basicCarpetSizes2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mobile_image_id', referencedColumnName: 'id' }])
  mobileImage: Image;

  @OneToMany(
    () => CampaignFreeOfferSize,
    (campaignFreeOfferSize) => campaignFreeOfferSize.basicCarpetSize,
  )
  campaignFreeOfferSizes: CampaignFreeOfferSize[];

  @OneToMany(
    () => CouponSubject,
    (couponSubject) => couponSubject.basicCarpetSize,
  )
  couponSubjects: CouponSubject[];

  @OneToMany(
    () => DesignersProductPriceRange,
    (designersProductPriceRange) => designersProductPriceRange.basicCarpetSize,
  )
  designersProductPriceRanges: DesignersProductPriceRange[];

  @OneToMany(
    () => DiscountSubject,
    (discountSubject) => discountSubject.basicCarpetSize,
  )
  discountSubjects: DiscountSubject[];

  @OneToMany(
    () => PriceGroupSize,
    (priceGroupSize) => priceGroupSize.basicCarpetSize,
  )
  priceGroupSizes: PriceGroupSize[];

  @OneToMany(
    () => ProductionPad,
    (productionPad) => productionPad.basicCarpetSize,
  )
  productionPads: ProductionPad[];

  @OneToMany(() => Product, (product) => product.minBasicCarpetSize)
  products: Product[];

  @OneToMany(
    () => RipTemplateItem,
    (ripTemplateItem) => ripTemplateItem.basicCarpetSize,
  )
  ripTemplateItems: RipTemplateItem[];

  @OneToMany(() => Subproduct, (subproduct) => subproduct.basicCarpetSize)
  subproducts: Subproduct[];

  @OneToMany(() => TorobProduct, (torobProduct) => torobProduct.basicCarpetSize)
  torobProducts: TorobProduct[];
}
