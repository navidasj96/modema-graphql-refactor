import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ColorCategoryDetail } from '@/modules/color-category-detail/entities/color-category-detail.entity';
import { ColorCategorySubproduct } from '@/modules/color-category-subproduct/entities/color-category-subproduct.entity';
import { Image } from '@/modules/image/entities/image.entity';

@Index('color_categories_homepage_image_id_index', ['homepageImageId'], {})
@Index('color_categories_image_id_index', ['imageId'], {})
@Index('color_categories_mobile_image_id_index', ['mobileImageId'], {})
@Index('color_categories_name_unique', ['name'], { unique: true })
@Entity('color_categories', { schema: 'modema' })
export class ColorCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('varchar', { name: 'color', length: 191 })
  color: string;

  @Column('int', { name: 'view_counter', default: () => "'0'" })
  viewCounter: number;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

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

  @Column('varchar', {
    name: 'alt_text',
    nullable: true,
    comment: 'For Seo',
    length: 191,
  })
  altText?: string;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn?: string;

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

  @ManyToOne(() => Image, (image) => image.colorCategories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'homepage_image_id', referencedColumnName: 'id' }])
  homepageImage: Image;

  @ManyToOne(() => Image, (image) => image.colorCategories2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(() => Image, (image) => image.colorCategories3, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mobile_image_id', referencedColumnName: 'id' }])
  mobileImage: Image;

  @OneToMany(
    () => ColorCategoryDetail,
    (colorCategoryDetails) => colorCategoryDetails.colorCategory
  )
  colorCategoryDetails: ColorCategoryDetail[];

  @OneToMany(
    () => ColorCategorySubproduct,
    (colorCategorySubproduct) => colorCategorySubproduct.colorCategory
  )
  colorCategorySubproducts: ColorCategorySubproduct[];
}
