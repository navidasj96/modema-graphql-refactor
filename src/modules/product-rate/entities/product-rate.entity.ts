import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('product_rate_product_comment_id_index', ['productCommentId'], {})
@Index(
  'product_rate_rate_id_product_comment_id_unique',
  ['rateId', 'productCommentId'],
  { unique: true },
)
@Index('product_rates_product_id_index', ['productId'], {})
@Index('product_rates_rate_id_index', ['rateId'], {})
@Index('product_rates_subproduct_id_index', ['subproductId'], {})
@Index('product_rates_user_id_index', ['userId'], {})
@Entity('product_rate', { schema: 'modema' })
export class ProductRate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'rate_id', nullable: true, unsigned: true })
  rateId?: number;

  @Column('double', {
    name: 'rate_value',
    unsigned: true,
    precision: 6,
    scale: 2,
  })
  rateValue: number;

  @Column('int', { name: 'product_comment_id', nullable: true, unsigned: true })
  productCommentId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('double', {
    name: 'old_rate',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  oldRate?: number;
}
