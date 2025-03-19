import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CouponSubject } from '@/modules/coupon-subject/entities/coupon-subject.entity';
import { DiscountSubject } from '@/modules/discount-subject/entities/discount-subject.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { ImageSize } from '@/modules/image-size/entities/image-size.entity';
import { ProductCategoryRate } from '@/modules/product-category-rate/entities/product-category-rate.entity';
import { ProductProductCategory } from '@/modules/product-product-category/entities/product-product-category.entity';
import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';

@Index('id', ['id'], {})
@Index('id_2', ['id'], {})
@Index('image_id', ['imageId'], {})
@Index('image_size_id', ['imageSizeId'], {})
@Index('parent_id', ['parentId'], {})
@Index('parent_id_2', ['parentId'], {})
@Index('product_categories_homepage_image_id_index', ['homepageImageId'], {})
@Index('product_categories_image_id_index', ['imageId'], {})
@Index('product_categories_mobile_image_id_index', ['mobileImageId'], {})
@Index('product_categories_parent_id_index', ['parentId'], {})
@Index('product_categories_parent_id_name_unique', ['parentId', 'name'], {
  unique: true,
})
@Index('sort_order', ['sortOrder'], {})
@Entity('product_categories', { schema: 'modema' })
export class ProductCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'parent_id', nullable: true, unsigned: true })
  parentId?: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'mobile_image_id', nullable: true, unsigned: true })
  mobileImageId?: number;

  @Column('int', { name: 'homepage_image_id', nullable: true, unsigned: true })
  homepageImageId?: number;

  @Column('tinyint', {
    name: 'show_on_homepage',
    width: 1,
    default: () => "'0'",
  })
  showOnHomepage: boolean;

  @Column('int', { name: 'image_size_id', nullable: true, unsigned: true })
  imageSizeId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'search_name', nullable: true, length: 191 })
  searchName?: string;

  @Column('varchar', { name: 'hierarchy_code', nullable: true, length: 191 })
  hierarchyCode?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('int', {
    name: 'view_counter',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter?: number;

  @Column('text', { name: 'meta_tags', nullable: true })
  metaTags?: string;

  @Column('varchar', { name: 'page_title', nullable: true, length: 191 })
  pageTitle?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('varchar', {
    name: 'page_title_single_size',
    nullable: true,
    length: 191,
  })
  pageTitleSingleSize?: string;

  @Column('text', { name: 'description_single_size', nullable: true })
  descriptionSingleSize?: string;

  @Column('text', { name: 'meta_tags_single_size', nullable: true })
  metaTagsSingleSize?: string;

  @Column('varchar', { name: 'url_slug', nullable: true, length: 191 })
  urlSlug?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

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

  @OneToMany(
    () => AttributeGroup,
    (attributeGroup) => attributeGroup.productCategory,
  )
  attributeGroups: AttributeGroup[];

  @OneToMany(
    () => CouponSubject,
    (couponSubject) => couponSubject.productCategory,
  )
  couponSubjects: CouponSubject[];

  @OneToMany(
    () => DiscountSubject,
    (discountSubject) => discountSubject.productCategory,
  )
  discountSubjects: DiscountSubject[];

  @ManyToOne(() => Image, (image) => image.productCategories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'homepage_image_id', referencedColumnName: 'id' }])
  homepageImage: Image;

  @ManyToOne(() => Image, (image) => image.productCategories2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(() => ImageSize, (imageSize) => imageSize.productCategories, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_size_id', referencedColumnName: 'id' }])
  imageSize: ImageSize;

  @ManyToOne(() => Image, (images) => images.productCategories3, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mobile_image_id', referencedColumnName: 'id' }])
  mobileImage: Image;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.productCategories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'parent_id', referencedColumnName: 'id' }])
  parent: ProductCategory;

  @OneToMany(() => ProductCategory, (productCategory) => productCategory.parent)
  productCategories: ProductCategory[];

  @OneToMany(
    () => ProductCategoryRate,
    (productCategoryRate) => productCategoryRate.productCategory,
  )
  productCategoryRates: ProductCategoryRate[];

  @OneToMany(
    () => ProductProductCategory,
    (productProductCategory) => productProductCategory.productCategory,
  )
  productProductCategory: ProductProductCategory[];
}
