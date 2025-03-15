import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'carpet_usage_place_invoice_product_carpet_usage_place_id_index',
  ['carpetUsagePlaceId'],
  {},
)
@Index(
  'carpet_usage_place_invoice_product_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Entity('carpet_usage_place_invoice_product', { schema: 'modema' })
export class CarpetUsagePlaceInvoiceProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_product_id', unsigned: true })
  invoiceProductId: number;

  @Column('int', { name: 'carpet_usage_place_id', unsigned: true })
  carpetUsagePlaceId: number;

  @Column('int', { name: 'row', unsigned: true })
  row: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
