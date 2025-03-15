import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('negotiations_customer_id_index', ['customerId'], {})
@Index('negotiations_name_index', ['name'], {})
@Index('negotiations_negotiation_status_id_index', ['negotiationStatusId'], {})
@Index('negotiations_negotiator_id_index', ['negotiatorId'], {})
@Index('negotiations_submitted_by_index', ['submittedBy'], {})
@Index('negotiations_tel_index', ['tel'], {})
@Entity('negotiations', { schema: 'modema' })
export class Negotiation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'submitted_by', unsigned: true })
  submittedBy: number;

  @Column('int', { name: 'customer_id', nullable: true, unsigned: true })
  customerId?: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'tel', nullable: true, length: 191 })
  tel?: string;

  @Column('int', { name: 'negotiator_id', unsigned: true })
  negotiatorId: number;

  @Column('int', { name: 'negotiation_status_id', unsigned: true })
  negotiationStatusId: number;

  @Column('datetime', { name: 'date_time' })
  dateTime: Date;

  @Column('int', { name: 'priority', unsigned: true })
  priority: number;

  @Column('tinyint', { name: 'is_read', width: 1, default: () => "'0'" })
  isRead: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
