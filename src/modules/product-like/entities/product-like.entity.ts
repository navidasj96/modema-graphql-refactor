import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('product_likes_product_id_index', ['productId'], {})
@Index(
  'product_likes_product_id_subproduct_id_user_id_unique',
  ['productId', 'subproductId', 'userId'],
  { unique: true },
)
@Index('product_likes_subproduct_id_index', ['subproductId'], {})
@Index('product_likes_user_id_index', ['userId'], {})
@Entity('product_likes', { schema: 'modema' })
export class ProductLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('tinyint', { name: 'is_like', width: 1 })
  isLike: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
