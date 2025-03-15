import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
