import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

@Index('chapar_tracking_histories_invoice_id_index', ['invoiceId'], {})
@Entity('chapar_tracking_histories', { schema: 'modema' })
export class ChaparTrackingHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('date', { name: 'date' })
  date: string;

  @Column('time', { name: 'time' })
  time: string;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('varchar', { name: 'status_note', length: 191 })
  statusNote: string;

  @Column('varchar', { name: 'tracking', length: 191 })
  tracking: string;

  @Column('varchar', { name: 'reference', length: 191 })
  reference: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Invoice, (invoice) => invoice.chaparTrackingHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;
}
