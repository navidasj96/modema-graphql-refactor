import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/entities/return-item-status-return-request-item.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/entities/return-request-item-image.entity';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/entities/return-request-item-return-item-status.entity';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/entities/return-request-item-video.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { ReturnItemStatus } from '@/modules/return-item-status/entities/return-item-status.entity';
import { ReturnReason } from '@/modules/return-reason/entities/return-reason.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

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

  @OneToMany(
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.returnRequestItem,
  )
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.returnRequestItem,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItemImage,
    (returnRequestItemImage) => returnRequestItemImage.returnRequestItem,
  )
  returnRequestItemImages: ReturnRequestItemImage[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.returnRequestItem,
  )
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestItemVideo,
    (returnRequestItemVideos) => returnRequestItemVideos.returnRequestItem,
  )
  returnRequestItemVideos: ReturnRequestItemVideo[];

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.returnRequestItems,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(() => Product, (product) => product.returnRequestItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(
    () => ReturnItemStatus,
    (returnItemStatus) => returnItemStatus.returnRequestItems,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_item_status_id', referencedColumnName: 'id' }])
  returnItemStatus: ReturnItemStatus;

  @ManyToOne(
    () => ReturnReason,
    (returnReason) => returnReason.returnRequestItems,
    { onDelete: 'SET NULL', onUpdate: 'SET NULL' },
  )
  @JoinColumn([{ name: 'return_reason_id', referencedColumnName: 'id' }])
  returnReason: ReturnReason;

  @ManyToOne(
    () => ReturnRequest,
    (returnRequest) => returnRequest.returnRequestItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_request_id', referencedColumnName: 'id' }])
  returnRequest: ReturnRequest;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.returnRequestItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
