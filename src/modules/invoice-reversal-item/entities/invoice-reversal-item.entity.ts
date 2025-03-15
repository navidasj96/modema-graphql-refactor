import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'invoice_reversal_items_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Index(
  'invoice_reversal_items_invoice_reversal_id_index',
  ['invoiceReversalId'],
  {},
)
@Entity('invoice_reversal_items', { schema: 'modema' })
export class InvoiceReversalItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_reversal_id', unsigned: true })
  invoiceReversalId: number;

  @Column('int', { name: 'invoice_product_id', unsigned: true })
  invoiceProductId: number;

  @Column('tinyint', { name: 'with_pad', width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column('int', { name: 'count', default: () => "'1'" })
  count: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
