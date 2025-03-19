import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { ReturnItemStatus } from '@/modules/return-item-status/entities/return-item-status.entity';
import { ReturnReason } from '@/modules/return-reason/entities/return-reason.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index('return_request_history_id', ['returnRequestHistoryId'], {})
@Index(
  'return_request_item_histories_invoice_product_id_foreign',
  ['invoiceProductId'],
  {},
)
@Index('return_request_item_histories_product_id_index', ['productId'], {})
@Index(
  'return_request_item_histories_return_item_status_id_index',
  ['returnItemStatusId'],
  {},
)
@Index(
  'return_request_item_histories_return_reason_id_index',
  ['returnReasonId'],
  {},
)
@Index(
  'return_request_item_histories_return_request_id_index',
  ['returnRequestId'],
  {},
)
@Index(
  'return_request_item_histories_return_request_item_id_index',
  ['returnRequestItemId'],
  {},
)
@Index(
  'return_request_item_histories_subproduct_id_index',
  ['subproductId'],
  {},
)
@Entity('return_request_item_histories', { schema: 'modema' })
export class ReturnRequestItemHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', {
    name: 'return_request_history_id',
    nullable: true,
    unsigned: true,
  })
  returnRequestHistoryId?: number;

  @Column('int', { name: 'return_request_item_id', unsigned: true })
  returnRequestItemId: number;

  @Column('int', { name: 'return_request_id', unsigned: true })
  returnRequestId: number;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('int', { name: 'row_no', nullable: true })
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

  @ManyToOne(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.returnRequestItemHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'return_request_history_id', referencedColumnName: 'id' },
  ])
  returnRequestHistory: ReturnRequestHistory;

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.returnRequestItemHistories,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(() => Product, (product) => product.returnRequestItemHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(
    () => ReturnItemStatus,
    (returnItemStatus) => returnItemStatus.returnRequestItemHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_item_status_id', referencedColumnName: 'id' }])
  returnItemStatus: ReturnItemStatus;

  @ManyToOne(
    () => ReturnReason,
    (returnReason) => returnReason.returnRequestItemHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_reason_id', referencedColumnName: 'id' }])
  returnReason: ReturnReason;

  @ManyToOne(
    () => ReturnRequest,
    (returnRequest) => returnRequest.returnRequestItemHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_request_id', referencedColumnName: 'id' }])
  returnRequest: ReturnRequest;

  @ManyToOne(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnRequestItemHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_request_item_id', referencedColumnName: 'id' }])
  returnRequestItem: ReturnRequestItem;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.returnRequestItemHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
