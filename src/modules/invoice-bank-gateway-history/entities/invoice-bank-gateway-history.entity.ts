import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { PreorderRegister } from '@/modules/preorder-register/entities/preorder-register.entity';

@Index('invoice_bank_gateway_histories_invoice_id_foreign', ['invoiceId'], {})
@Index('invoice_bank_gateway_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_bank_gateway_histories_preorder_register_id_index',
  ['preorderRegisterId'],
  {}
)
@Entity('invoice_bank_gateway_histories', { schema: 'modema' })
export class InvoiceBankGatewayHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', nullable: true, unsigned: true })
  invoiceId?: number;

  @Column('varchar', { name: 'ref_id', nullable: true, length: 191 })
  refId?: string;

  @Column('varchar', { name: 'order_id', nullable: true, length: 191 })
  orderId?: string;

  @Column('varchar', { name: 'sale_ref_id', nullable: true, length: 191 })
  saleRefId?: string;

  @Column('decimal', {
    name: 'amount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amount?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', {
    name: 'preorder_register_id',
    nullable: true,
    unsigned: true,
  })
  preorderRegisterId?: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceBankGatewayHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(
    () => PreorderRegister,
    (preorderRegister) => preorderRegister.invoiceBankGatewayHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'preorder_register_id', referencedColumnName: 'id' }])
  preorderRegister: PreorderRegister;
}
