import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Index('code_2', ['code'], { unique: true })
@Index('invoice_product_id', ['invoiceProductId'], {})
@Index('return_request_items_product_id_index', ['productId'], {})
@Index(
  'return_request_items_return_item_status_id_index',
  ['returnItemStatusId'],
  {},
)
@Index('return_request_items_return_reason_id_index', ['returnReasonId'], {})
@Index('return_request_items_return_request_id_index', ['returnRequestId'], {})
@Index('return_request_items_subproduct_id_index', ['subproductId'], {})
@Entity('return_request_items', { schema: 'modema' })
export class ReturnRequestItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_id', unsigned: true })
  returnRequestId: number;

  @Column('varchar', {
    name: 'code',
    nullable: true,
    unique: true,
    length: 191,
  })
  code?: string;

  @Column('int', { name: 'row_no', nullable: true, unsigned: true })
  rowNo?: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('int', { name: 'invoice_product_id', nullable: true, unsigned: true })
  invoiceProductId?: number;

  @Column('tinyint', { name: 'count', unsigned: true, default: () => "'0'" })
  count: number;

  @Column('int', {
    name: 'return_item_status_id',
    nullable: true,
    unsigned: true,
  })
  returnItemStatusId?: number;

  @Column('int', { name: 'return_reason_id', nullable: true, unsigned: true })
  returnReasonId?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('text', { name: 'description_sales', nullable: true })
  descriptionSales?: string;

  @Column('text', { name: 'description_factory', nullable: true })
  descriptionFactory?: string;

  @Column('text', { name: 'description_accounting', nullable: true })
  descriptionAccounting?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
