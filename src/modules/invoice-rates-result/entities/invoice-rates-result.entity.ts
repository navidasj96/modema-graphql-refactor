import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_rates_results_address_id_index', ['addressId'], {})
@Index('invoice_rates_results_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_rates_results_invoice_id_shipping_service_id_unique',
  ['invoiceId', 'shippingServiceId'],
  { unique: true },
)
@Index(
  'invoice_rates_results_shipping_service_id_index',
  ['shippingServiceId'],
  {},
)
@Entity('invoice_rates_results', { schema: 'modema' })
export class InvoiceRatesResult {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @Column('int', {
    name: 'shipping_service_id',
    nullable: true,
    unsigned: true,
  })
  shippingServiceId?: number;

  @Column('longtext', { name: 'rates_reply_result', nullable: true })
  ratesReplyResult?: string;

  @Column('longtext', { name: 'rates_reply_cod_result', nullable: true })
  ratesReplyCodResult?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
