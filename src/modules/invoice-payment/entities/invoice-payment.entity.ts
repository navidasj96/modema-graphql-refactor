import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/entities/invoice-payment-type.entity';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';

@Index('invoice_payments_confirmed_by_index', ['confirmedBy'], {})
@Index('invoice_payments_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_payments_invoice_payment_type_id_index',
  ['invoicePaymentTypeId'],
  {},
)
@Index('invoice_payments_user_id_index', ['userId'], {})
@Entity('invoice_payments', { schema: 'modema' })
export class InvoicePayment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'invoice_payment_type_id', unsigned: true })
  invoicePaymentTypeId: number;

  @Column('decimal', {
    name: 'amount',
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column('tinyint', { name: 'for_shipping', width: 1, default: () => "'0'" })
  forShipping: boolean;

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
  chequePayee?: string;

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

  @OneToMany(
    () => InvoicePaymentHistory,
    (invoicePaymentHistory) => invoicePaymentHistory.invoicePayment,
  )
  invoicePaymentHistories: InvoicePaymentHistory[];

  @ManyToOne(() => User, (user) => user.invoicePayments, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'confirmed_by', referencedColumnName: 'id' }])
  confirmedBy2: User;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoicePayments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(
    () => InvoicePaymentType,
    (invoicePaymentType) => invoicePaymentType.invoicePayments,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invoice_payment_type_id', referencedColumnName: 'id' }])
  invoicePaymentType: InvoicePaymentType;

  @ManyToOne(() => User, (user) => user.invoicePayments2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
