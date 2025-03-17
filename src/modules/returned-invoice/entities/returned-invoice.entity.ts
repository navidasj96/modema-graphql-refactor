import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('return_reason_id', ['returnReasonId'], {})
@Index('returned_invoices_invoice_id_index', ['invoiceId'], {})
@Index(
  'returned_invoices_replacement_invoice_id_index',
  ['replacementInvoiceId'],
  {},
)
@Index('returned_invoices_user_id_index', ['userId'], {})
@Entity('returned_invoices', { schema: 'modema' })
export class ReturnedInvoice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', {
    name: 'replacement_invoice_id',
    nullable: true,
    unsigned: true,
  })
  replacementInvoiceId?: number;

  @Column('int', { name: 'return_reason_id', nullable: true, unsigned: true })
  returnReasonId?: number;

  @Column('datetime', { name: 'return_date', nullable: true })
  returnDate?: Date;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('tinyint', { name: 'snapp_informed', width: 1, default: () => "'0'" })
  snappInformed: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
