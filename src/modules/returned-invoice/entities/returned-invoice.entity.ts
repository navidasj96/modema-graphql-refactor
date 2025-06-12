import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/entities/returned-invoice-product.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ReturnReason } from '@/modules/return-reason/entities/return-reason.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('return_reason_id', ['returnReasonId'], {})
@Index('returned_invoices_invoice_id_index', ['invoiceId'], {})
@Index(
  'returned_invoices_replacement_invoice_id_index',
  ['replacementInvoiceId'],
  {}
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

  @OneToMany(
    () => ReturnedInvoiceProduct,
    (returnedInvoiceProduct) => returnedInvoiceProduct.returnedInvoice
  )
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @ManyToOne(() => Invoice, (invoice) => invoice.returnedInvoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(() => Invoice, (invoice) => invoice.returnedInvoices2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'replacement_invoice_id', referencedColumnName: 'id' }])
  replacementInvoice: Invoice;

  @ManyToOne(
    () => ReturnReason,
    (returnReason) => returnReason.returnedInvoices,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_reason_id', referencedColumnName: 'id' }])
  returnReason: ReturnReason;

  @ManyToOne(() => User, (user) => user.returnedInvoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
