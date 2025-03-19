import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { Rate } from '@/modules/rate/entities/rate.entity';

@Index(
  'product_category_rate_product_category_id_index',
  ['productCategoryId'],
  {},
)
@Index('product_category_rate_rate_id_index', ['rateId'], {})
@Entity('product_category_rate', { schema: 'modema' })
export class ProductCategoryRate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_category_id', unsigned: true })
  productCategoryId: number;

  @Column('int', { name: 'rate_id', unsigned: true })
  rateId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.productCategoryRates,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategory;

  @ManyToOne(() => Rate, (rate) => rate.productCategoryRates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'rate_id', referencedColumnName: 'id' }])
  rate: Rate;
}
