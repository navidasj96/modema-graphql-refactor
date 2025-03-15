import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'product_product_category_product_category_id_index',
  ['productCategoryId'],
  {},
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
}
