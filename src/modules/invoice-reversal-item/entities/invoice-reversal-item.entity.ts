import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceReversal } from '@/modules/invoice-reversal/entities/invoice-reversal.entity';

@Index(
  'invoice_reversal_items_invoice_product_id_index',
  ['invoiceProductId'],
  {}
)
@Index(
  'invoice_reversal_items_invoice_reversal_id_index',
  ['invoiceReversalId'],
  {}
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

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.invoiceReversalItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(
    () => InvoiceReversal,
    (invoiceReversal) => invoiceReversal.invoiceReversalItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_reversal_id', referencedColumnName: 'id' }])
  invoiceReversal: InvoiceReversal;
}
