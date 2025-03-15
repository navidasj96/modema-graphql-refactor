import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('favorite_products_idx1', ['productId', 'userId'], { unique: true })
@Index('product_favorites_product_id_index', ['productId'], {})
@Index('product_favorites_subproduct_id_index', ['subproductId'], {})
@Index('product_favorites_user_id_index', ['userId'], {})
@Entity('favorite_products', { schema: 'modema' })
export class FavoriteProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
