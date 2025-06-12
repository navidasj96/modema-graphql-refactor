import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/entities/visitor-group-rate.entity';
import { VisitorSale } from '@/modules/visitor-sale/entities/visitor-sale.entity';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';

@Index('visitor_groups_name_unique', ['name'], { unique: true })
@Entity('visitor_groups', { schema: 'modema' })
export class VisitorGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('double', {
    name: 'coupon_discount_rate',
    precision: 22,
    default: () => "'0'",
  })
  couponDiscountRate: number;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.visitorGroup)
  invoices: Invoice[];

  @OneToMany(
    () => VisitorGroupRate,
    (visitorGroupRate) => visitorGroupRate.visitorGroup
  )
  visitorGroupRates: VisitorGroupRate[];

  @OneToMany(() => VisitorSale, (visitorSale) => visitorSale.visitorGroup)
  visitorSales: VisitorSale[];

  @OneToMany(() => Visitor, (visitor) => visitor.visitorGroup)
  visitors: Visitor[];
}
