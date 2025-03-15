import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_bank_gateway_histories_invoice_id_foreign', ['invoiceId'], {})
@Index('invoice_bank_gateway_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_bank_gateway_histories_preorder_register_id_index',
  ['preorderRegisterId'],
  {},
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
}
