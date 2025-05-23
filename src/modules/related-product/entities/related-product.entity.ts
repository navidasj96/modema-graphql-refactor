import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '@/modules/product/entities/product.entity';

@Index('related_products_idx1', ['productId', 'relatedProductId'], {
  unique: true,
})
@Index('related_products_product_id_index', ['productId'], {})
@Index('related_products_related_product_id_index', ['relatedProductId'], {})
@Entity('related_products', { schema: 'modema' })
export class RelatedProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'related_product_id', unsigned: true })
  relatedProductId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Product, (product) => product.relatedProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Product, (product) => product.relatedProducts2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_product_id', referencedColumnName: 'id' }])
  relatedProduct: Product;
}
