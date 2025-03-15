import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('created_at', ['createdAt'], {})
@Index('invoice_product_item_index', ['invoiceProductItemId'], {})
@Index('invoice_product_item_user_index', ['userId'], {})
@Index('invoice_product_status_index', ['invoiceProductStatusId'], {})
@Entity('invoice_product_item_invoice_product_status', { schema: 'modema' })
export class InvoiceProductItemInvoiceProductStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_product_item_id', unsigned: true })
  invoiceProductItemId: number;

  @Column('int', { name: 'invoice_product_status_id', unsigned: true })
  invoiceProductStatusId: number;

  @Column('int', {
    name: 'user_id',
    comment: 'Operator who changes the status.',
    unsigned: true,
  })
  userId: number;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment?: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
