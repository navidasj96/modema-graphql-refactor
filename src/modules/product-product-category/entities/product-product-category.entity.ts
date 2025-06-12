import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index(
  'product_product_category_product_category_id_index',
  ['productCategoryId'],
  {}
)
@Index('product_product_category_product_id_index', ['productId'], {})
@Entity('product_product_category', { schema: 'modema' })
export class ProductProductCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'product_category_id', unsigned: true })
  productCategoryId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.productProductCategory,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategory;

  @ManyToOne(() => Product, (products) => products.productProductCategories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
