import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'returned_invoice_products_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Index('returned_invoice_products_product_id_index', ['productId'], {})
@Index(
  'returned_invoice_products_returned_invoice_id_index',
  ['returnedInvoiceId'],
  {},
)
@Index('returned_invoice_products_subproduct_id_index', ['subproductId'], {})
@Entity('returned_invoice_products', { schema: 'modema' })
export class ReturnedInvoiceProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'returned_invoice_id', unsigned: true })
  returnedInvoiceId: number;

  @Column('int', { name: 'invoice_product_id', unsigned: true })
  invoiceProductId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('int', { name: 'count', default: () => "'1'" })
  count: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
