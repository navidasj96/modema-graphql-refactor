import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'designers_product_price_ranges_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Entity('designers_product_price_ranges', { schema: 'modema' })
export class DesignersProductPriceRange {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('double', { name: 'min_price' }) // ✅ Remove invalid precision
  minPrice: number;

  @Column('double', { name: 'max_price', precision: 10, scale: 2 }) // ✅ Fix precision/scale
  maxPrice: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
