import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { Discount } from '@/modules/discount/entities/discount.entity';
import { Design } from '@/modules/design/entities/design.entity';

@Index('invoice_product_histories_design_id_index', ['designId'], {})
@Index('invoice_product_histories_discount_id_index', ['discountId'], {})
@Index(
  'invoice_product_histories_invoice_history_id_index',
  ['invoiceHistoryId'],
  {}
)
@Index('invoice_product_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_product_histories_invoice_product_id_index',
  ['invoiceProductId'],
  {}
)
@Index('invoice_product_histories_pad_id_index', ['padId'], {})
@Index('invoice_product_histories_product_id_index', ['productId'], {})
@Index(
  'invoice_product_histories_related_product_id_index',
  ['relatedProductId'],
  {}
)
@Index(
  'invoice_product_histories_related_subproduct_id_index',
  ['relatedSubproductId'],
  {}
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
  isCouponApplicable: number;

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
  withPad: number;

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
  invoiceProductItemsCreated: number;

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
  manuallyAdded: number;

  @ManyToOne(() => Design, (design) => design.invoiceProductHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'design_id', referencedColumnName: 'id' }])
  design: Design;

  @ManyToOne(() => Discount, (discount) => discount.invoiceProductHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount_2: Discount;

  @ManyToOne(
    () => InvoiceHistory,
    (invoiceHistory) => invoiceHistory.invoiceProductHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_history_id', referencedColumnName: 'id' }])
  invoiceHistory: InvoiceHistory;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceProductHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.invoiceProductHistories,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(() => Product, (product) => product.invoiceProductHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Product, (product) => product.invoiceProductHistories2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_product_id', referencedColumnName: 'id' }])
  relatedProduct: Product;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.invoiceProductHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'related_subproduct_id', referencedColumnName: 'id' }])
  relatedSubproduct: Subproduct;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.invoiceProductHistories2,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
