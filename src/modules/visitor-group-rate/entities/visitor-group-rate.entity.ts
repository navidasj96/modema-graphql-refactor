import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VisitorGroup } from '@/modules/visitor-group/entities/visitor-group.entity';

@Index('visitor_group_rates_visitor_group_id_index', ['visitorGroupId'], {})
@Entity('visitor_group_rates', { schema: 'modema' })
export class VisitorGroupRate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'visitor_group_id', unsigned: true })
  visitorGroupId: number;

  @Column('double', {
    name: 'min_revenue',
    precision: 22,
    default: () => "'0'",
  })
  minRevenue: number;

  @Column('double', {
    name: 'max_revenue',
    precision: 22,
    default: () => "'1000000000000'",
  })
  maxRevenue: number;

  @Column('double', { name: 'rate', precision: 22, default: () => "'5'" })
  rate: number;

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

  @ManyToOne(
    () => VisitorGroup,
    (visitorGroup) => visitorGroup.visitorGroupRates,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'visitor_group_id', referencedColumnName: 'id' }])
  visitorGroup: VisitorGroup;
}
