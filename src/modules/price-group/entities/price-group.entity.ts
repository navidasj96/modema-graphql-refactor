import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DiscountSubject } from '@/modules/discount-subject/entities/discount-subject.entity';
import { PriceGroupSize } from '@/modules/price-group-size/entities/price-group-size.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Entity('price_groups', { schema: 'modema' })
export class PriceGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => DiscountSubject,
    (discountSubjects) => discountSubjects.priceGroup,
  )
  discountSubjects: DiscountSubject[];

  @OneToMany(
    () => PriceGroupSize,
    (priceGroupSize) => priceGroupSize.priceGroup,
  )
  priceGroupSizes: PriceGroupSize[];

  @OneToMany(() => Product, (product) => product.priceGroup)
  products: Product[];
}
