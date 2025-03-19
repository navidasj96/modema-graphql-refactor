import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ColorCategory } from '@/modules/color-category/entities/color-category.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index(
  'color_category_subproduct_color_category_id_index',
  ['colorCategoryId'],
  {},
)
@Index('color_category_subproduct_idx1', ['colorCategoryId', 'subproductId'], {
  unique: true,
})
@Index('color_category_subproduct_subproduct_id_index', ['subproductId'], {})
@Entity('color_category_subproduct', { schema: 'modema' })
export class ColorCategorySubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'color_category_id', unsigned: true })
  colorCategoryId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ColorCategory,
    (colorCategory) => colorCategory.colorCategorySubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'color_category_id', referencedColumnName: 'id' }])
  colorCategory: ColorCategory;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.colorCategorySubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
