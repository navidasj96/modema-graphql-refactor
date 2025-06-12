import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';

@Index('image_sizes_name_unique', ['name'], { unique: true })
@Index('image_sizes_short_name_unique', ['shortName'], { unique: true })
@Entity('image_sizes', { schema: 'modema' })
export class ImageSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('varchar', { name: 'short_name', unique: true, length: 191 })
  shortName: string;

  @Column('double', { name: 'width', precision: 22 })
  width: number;

  @Column('double', { name: 'height', precision: 22 })
  height: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductCategory,
    (productCategory) => productCategory.imageSize
  )
  productCategories: ProductCategory[];
}
