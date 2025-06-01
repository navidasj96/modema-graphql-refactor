import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductTag } from '@/modules/product-tag/entities/product-tag.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { TagDetail } from '@/modules/tag-detail/entities/tag-detail.entity';

@Index('slider_image_id', ['sliderImageId'], {})
@Index('tags_image_id_index', ['imageId'], {})
@Entity('tags', { schema: 'modema' })
export class Tag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'slider_image_id', nullable: true, unsigned: true })
  sliderImageId?: number;

  // ✅ FIX: Corrected DOUBLE precision & removed invalid default value
  @Column('double', {
    name: 'discount',
    nullable: true,
    precision: 22,
    scale: 2, // Corrected scale value
    default: 0, // Removed incorrect string syntax
  })
  discount?: number;

  @Column('tinyint', { name: 'special_offer', width: 1, default: 0 })
  specialOffer: number;

  @Column('int', { name: 'column_width', default: 12 })
  columnWidth: number;

  @Column('int', { name: 'column_order', default: 1 })
  columnOrder: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('varchar', { name: 'search_title', nullable: true, length: 191 })
  searchTitle?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: 1,
  })
  isActive?: number;

  @Column('int', {
    name: 'view_counter',
    nullable: true,
    unsigned: true,
    default: 0,
  })
  viewCounter?: number;

  @Column('text', { name: 'meta_tags', nullable: true })
  metaTags?: string;

  @Column('varchar', { name: 'page_title', nullable: true, length: 191 })
  pageTitle?: string;

  @Column('varchar', { name: 'url_slug', nullable: true, length: 191 })
  urlSlug?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'title_en', nullable: true, length: 191 })
  titleEn?: string;

  @Column('varchar', { name: 'search_title_en', nullable: true, length: 191 })
  searchTitleEn?: string;

  @Column('text', { name: 'meta_tags_en', nullable: true })
  metaTagsEn?: string;

  @Column('varchar', { name: 'page_title_en', nullable: true, length: 191 })
  pageTitleEn?: string;

  @Column('text', { name: 'description_en', nullable: true })
  descriptionEn?: string;

  @Column('varchar', { name: 'url_slug_en', nullable: true, length: 191 })
  urlSlugEn?: string;

  @OneToMany(() => ProductTag, (productTag) => productTag.tag)
  productTags: ProductTag[];

  @ManyToOne(() => Image, (image) => image.tags, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'slider_image_id', referencedColumnName: 'id' }])
  sliderImage: Image;

  @ManyToOne(() => Image, (image) => image.tags2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @OneToMany(() => TagDetail, (tagDetail) => tagDetail.tag)
  tagDetails: TagDetail[];
}
