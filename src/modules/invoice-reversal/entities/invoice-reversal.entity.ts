import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/entities/invoice-reversal-item.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('invoice_reversals_invoice_id_index', ['invoiceId'], {})
@Index('invoice_reversals_invoice_status_id_index', ['invoiceStatusId'], {})
@Index('invoice_reversals_reviewed_by_index', ['reviewedBy'], {})
@Entity('invoice_reversals', { schema: 'modema' })
export class InvoiceReversal {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('tinyint', { name: 'whole_invoice', width: 1, default: () => "'0'" })
  wholeInvoice: boolean;

  @Column('int', { name: 'invoice_status_id', unsigned: true })
  invoiceStatusId: number;

  @Column('tinyint', { name: 'is_reviewed', width: 1, default: () => "'0'" })
  isReviewed: boolean;

  @Column('int', { name: 'reviewed_by', nullable: true, unsigned: true })
  reviewedBy?: number;

  @Column('datetime', { name: 'reviewed_date', nullable: true })
  reviewedDate?: Date;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => InvoiceReversalItem,
    (invoiceReversalItem) => invoiceReversalItem.invoiceReversal
  )
  invoiceReversalItems: InvoiceReversalItem[];

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceReversals, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(
    () => InvoiceStatus,
    (invoiceStatus) => invoiceStatus.invoiceReversals,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_status_id', referencedColumnName: 'id' }])
  invoiceStatus: InvoiceStatus;

  @ManyToOne(() => User, (user) => user.invoiceReversals, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'reviewed_by', referencedColumnName: 'id' }])
  reviewedBy2: User;
}
