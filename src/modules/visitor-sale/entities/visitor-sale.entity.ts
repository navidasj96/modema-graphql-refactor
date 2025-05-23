import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VisitorGroup } from '@/modules/visitor-group/entities/visitor-group.entity';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';

@Index('visitor_sales_visitor_group_id_index', ['visitorGroupId'], {})
@Index('visitor_sales_visitor_id_index', ['visitorId'], {})
@Entity('visitor_sales', { schema: 'modema' })
export class VisitorSale {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'visitor_id', unsigned: true })
  visitorId: number;

  @Column('datetime', { name: 'start_date' })
  startDate: Date;

  @Column('datetime', { name: 'end_date' })
  endDate: Date;

  @Column('int', { name: 'visitor_group_id', unsigned: true })
  visitorGroupId: number;

  @Column('double', { name: 'rate', precision: 22 })
  rate: number;

  @Column('double', {
    name: 'total_sale',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totalSale?: number;

  @Column('double', {
    name: 'total_share',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totalShare?: number;

  @Column('int', { name: 'year_sh' })
  yearSh: number;

  @Column('int', { name: 'month_sh' })
  monthSh: number;

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

  @ManyToOne(() => VisitorGroup, (visitorGroup) => visitorGroup.visitorSales, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visitor_group_id', referencedColumnName: 'id' }])
  visitorGroup: VisitorGroup;

  @ManyToOne(() => Visitor, (visitor) => visitor.visitorSales, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visitor_id', referencedColumnName: 'id' }])
  visitor: Visitor;
}
