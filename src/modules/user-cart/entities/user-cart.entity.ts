import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_carts_design_id_index', ['designId'], {})
@Index(
  'user_carts_idx1',
  ['userId', 'subproductId', 'withPad', 'relatedSubproductId'],
  { unique: true },
)
@Index('user_carts_product_id_index', ['productId'], {})
@Index('user_carts_related_product_id_index', ['relatedProductId'], {})
@Index('user_carts_related_subproduct_id_index', ['relatedSubproductId'], {})
@Index('user_carts_subproduct_id_index', ['subproductId'], {})
@Index('user_carts_user_id_index', ['userId'], {})
@Entity('user_carts', { schema: 'modema' })
export class UserCart {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'design_id', nullable: true, unsigned: true })
  designId?: number;

  @Column('smallint', { name: 'count', unsigned: true })
  count: number;

  @Column('smallint', { name: 'bundle_count', default: 0 })
  bundleCount: number;

  // ✅ FIX: Removed UNSIGNED, Corrected precision format
  @Column('double', {
    name: 'width',
    nullable: true,
    precision: 22,
    scale: 2, // Corrected scale value
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    precision: 22,
    scale: 2, // Corrected scale value
  })
  length?: number;

  @Column('tinyint', { name: 'with_pad', width: 1, default: 0 })
  withPad: boolean;

  @Column('int', { name: 'related_product_id', nullable: true, unsigned: true })
  relatedProductId?: number;

  @Column('int', {
    name: 'related_subproduct_id',
    nullable: true,
    unsigned: true,
  })
  relatedSubproductId?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
