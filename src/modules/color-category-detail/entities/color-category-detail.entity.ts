import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'color_category_details_color_category_id_index',
  ['colorCategoryId'],
  {},
)
@Entity('color_category_details', { schema: 'modema' })
export class ColorCategoryDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'color_category_id', nullable: true, unsigned: true })
  colorCategoryId?: number;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title?: string;

  @Column('text', { name: 'detail_text', nullable: true })
  detailText?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'title_en', nullable: true, length: 191 })
  titleEn?: string;

  @Column('text', { name: 'detail_text_en', nullable: true })
  detailTextEn?: string;
}
