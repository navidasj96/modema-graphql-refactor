import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategoryRate } from '@/modules/product-category-rate/entities/product-category-rate.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';

@Entity('rates', { schema: 'modema' })
export class Rate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'description', length: 191 })
  description: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductCategoryRate,
    (productCategoryRate) => productCategoryRate.rate,
  )
  productCategoryRates: ProductCategoryRate[];

  @OneToMany(() => ProductRate, (productRate) => productRate.rate)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverage,
    (productRateAverage) => productRateAverage.rate,
  )
  productRateAverages: ProductRateAverage[];
}
