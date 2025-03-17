import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('visitors_sort_order_index', ['sortOrder'], {})
@Index('visitors_title_unique', ['title'], { unique: true })
@Index('visitors_user_id_index', ['userId'], {})
@Index('visitors_visitor_group_id_index', ['visitorGroupId'], {})
@Entity('visitors', { schema: 'modema' })
export class Visitor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'visitor_group_id', unsigned: true })
  visitorGroupId: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', comment: 'code shenasaei', length: 191 })
  code: string;

  @Column('double', {
    name: 'balance',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  balance?: number;

  @Column('varchar', { name: 'card_number', nullable: true, length: 191 })
  cardNumber?: string;

  @Column('tinyint', {
    name: 'is_partner',
    comment: 'Aya bazaryab az foroshgah haye hamkar ast ya kheir',
    width: 1,
    default: () => "'0'",
  })
  isPartner: boolean;

  @Column('varchar', {
    name: 'partner_code',
    nullable: true,
    comment: 'Code Moarref(Baraye Foroshgahhaye Hamkar)',
    length: 191,
  })
  partnerCode?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
