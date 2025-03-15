import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_payment_histories_confirmed_by_index', ['confirmedBy'], {})
@Index(
  'invoice_payment_histories_invoice_history_id_index',
  ['invoiceHistoryId'],
  {},
)
@Index('invoice_payment_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_payment_histories_invoice_payment_id_index',
  ['invoicePaymentId'],
  {},
)
@Index(
  'invoice_payment_histories_invoice_payment_type_id_index',
  ['invoicePaymentTypeId'],
  {},
)
@Index('invoice_payment_histories_user_id_index', ['userId'], {})
@Entity('invoice_payment_histories', { schema: 'modema' })
export class InvoicePaymentHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_payment_id', unsigned: true })
  invoicePaymentId: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'invoice_history_id', nullable: true, unsigned: true })
  invoiceHistoryId?: number;

  @Column('int', { name: 'invoice_payment_type_id', unsigned: true })
  invoicePaymentTypeId: number;

  @Column('decimal', {
    name: 'amount',
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column('tinyint', { name: 'for_shipping', nullable: true, width: 1 })
  forShipping?: boolean;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', { name: 'ref_code', nullable: true, length: 191 })
  refCode?: string;

  @Column('varchar', { name: 'cheque_number', nullable: true, length: 191 })
  chequeNumber?: string;

  @Column('varchar', { name: 'cheque_bank', nullable: true, length: 191 })
  chequeBank?: string;

  @Column('varchar', { name: 'cheque_date', nullable: true, length: 191 })
  chequeDate?: string;

  @Column('varchar', { name: 'cheque_payee', nullable: true, length: 191 })
  chequePayee: string;

  @Column('tinyint', { name: 'is_confirmed', nullable: true, width: 1 })
  isConfirmed?: boolean;

  @Column('varchar', { name: 'ref_code_sales', nullable: true, length: 191 })
  refCodeSales?: string;

  @Column('int', { name: 'confirmed_by', nullable: true, unsigned: true })
  confirmedBy?: number;

  @Column('date', { name: 'payment_date', nullable: true })
  paymentDate?: string;

  @Column('varchar', { name: 'description', nullable: true, length: 191 })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
