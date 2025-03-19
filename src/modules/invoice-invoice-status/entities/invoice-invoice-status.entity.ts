import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('invoice_invoice_status_idx1', ['invoiceId', 'invoiceStatusId'], {})
@Index('invoice_invoice_status_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_invoice_status_invoice_status_id_index',
  ['invoiceStatusId'],
  {},
)
@Index('invoice_invoice_status_user_id_index', ['userId'], {})
@Entity('invoice_invoice_status', { schema: 'modema' })
export class InvoiceInvoiceStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'invoice_status_id', unsigned: true })
  invoiceStatusId: number;

  @Column('int', {
    name: 'user_id',
    nullable: true,
    comment: 'Operator who change the status.',
    unsigned: true,
  })
  userId?: number;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceInvoiceStatuses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(
    () => InvoiceStatus,
    (invoiceStatus) => invoiceStatus.invoiceInvoiceStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invoice_status_id', referencedColumnName: 'id' }])
  invoiceStatus: InvoiceStatus;

  @ManyToOne(() => User, (users) => users.invoiceInvoiceStatuses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
