import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
