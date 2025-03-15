import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_product_histories_design_id_index', ['designId'], {})
@Index('invoice_product_histories_discount_id_index', ['discountId'], {})
@Index(
  'invoice_product_histories_invoice_history_id_index',
  ['invoiceHistoryId'],
  {},
)
@Index('invoice_product_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_product_histories_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Index('invoice_product_histories_pad_id_index', ['padId'], {})
@Index('invoice_product_histories_product_id_index', ['productId'], {})
@Index(
  'invoice_product_histories_related_product_id_index',
  ['relatedProductId'],
  {},
)
@Index(
  'invoice_product_histories_related_subproduct_id_index',
  ['relatedSubproductId'],
  {},
)
@Index('invoice_product_histories_subproduct_id_index', ['subproductId'], {})
@Entity('invoice_product_histories', { schema: 'modema' })
export class InvoiceProductHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_history_id', unsigned: true })
  invoiceHistoryId: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'invoice_product_id', nullable: true, unsigned: true })
  invoiceProductId: number | null;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId: number | null;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId: number | null;

  @Column('int', { name: 'design_id', nullable: true, unsigned: true })
  designId: number | null;

  @Column('int', { name: 'discount_id', nullable: true, unsigned: true })
  discountId: number | null;

  @Column('double', { name: 'width', nullable: true, precision: 22 })
  width: number | null;

  @Column('double', { name: 'length', nullable: true, precision: 22 })
  length: number | null;

  @Column('double', { name: 'price_per_inch', nullable: true, precision: 22 })
  pricePerInch: number | null;

  @Column('decimal', { name: 'price', precision: 18, scale: 2 })
  price: string;

  @Column('decimal', {
    name: 'bundle_price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  bundlePrice: string;

  @Column('decimal', {
    name: 'discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  discount: string | null;

  @Column('smallint', { name: 'count' })
  count: number;

  @Column('smallint', { name: 'bundle_count', default: () => "'0'" })
  bundleCount: number;

  @Column('double', { name: 'total_price', nullable: true, precision: 22 })
  totalPrice: number | null;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount: string | null;

  @Column('tinyint', { name: 'is_coupon_applicable', width: 1 })
  isCouponApplicable: boolean;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount: string | null;

  @Column('double', {
    name: 'designer_price_percentage',
    nullable: true,
    precision: 22,
  })
  designerPricePercentage: number | null;

  @Column('double', {
    name: 'designer_price_share',
    nullable: true,
    precision: 22,
  })
  designerPriceShare: number | null;

  @Column('tinyint', { name: 'with_pad', width: 1 })
  withPad: boolean;

  @Column('int', { name: 'pad_id', nullable: true, unsigned: true })
  padId: number | null;

  @Column('int', { name: 'related_product_id', nullable: true, unsigned: true })
  relatedProductId: number | null;

  @Column('int', {
    name: 'related_subproduct_id',
    nullable: true,
    unsigned: true,
  })
  relatedSubproductId: number | null;

  @Column('tinyint', { name: 'invoice_product_items_created', width: 1 })
  invoiceProductItemsCreated: boolean;

  @Column('int', { name: 'items_to_produce', nullable: true })
  itemsToProduce: number | null;

  @Column('int', { name: 'items_from_depot', nullable: true })
  itemsFromDepot: number | null;

  @Column('int', { name: 'stock_count', nullable: true })
  stockCount: number | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', { name: 'manually_added', width: 1, default: () => "'0'" })
  manuallyAdded: boolean;
}
