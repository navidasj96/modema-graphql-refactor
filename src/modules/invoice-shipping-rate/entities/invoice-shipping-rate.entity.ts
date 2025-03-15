import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_shipping_rates_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_shipping_rates_shipping_service_id_index',
  ['shippingServiceId'],
  {},
)
@Entity('invoice_shipping_rates', { schema: 'modema' })
export class InvoiceShippingRate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'shipping_service_id', unsigned: true })
  shippingServiceId: number;

  @Column('decimal', {
    name: 'shipping_rate',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  shippingRate: string;

  @Column('decimal', {
    name: 'shipping_rate_cod',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
