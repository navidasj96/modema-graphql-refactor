import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('product_rate_averages_product_id_index', ['productId'], {})
@Index(
  'product_rate_averages_product_id_subproduct_id_rate_id_unique',
  ['productId', 'subproductId', 'rateId'],
  { unique: true },
)
@Index('product_rate_averages_rate_id_index', ['rateId'], {})
@Index('product_rate_averages_subproduct_id_index', ['subproductId'], {})
@Entity('product_rate_averages', { schema: 'modema' })
export class ProductRateAverage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'rate_id', unsigned: true })
  rateId: number;

  // ✅ FIX: Corrected DOUBLE precision & removed invalid default value
  @Column('double', {
    name: 'average_rate',
    precision: 22,
    scale: 2, // Corrected scale value
    default: 0, // Removed incorrect string syntax
  })
  averageRate: number;

  @Column('int', { name: 'rate_count', default: 0 })
  rateCount: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
