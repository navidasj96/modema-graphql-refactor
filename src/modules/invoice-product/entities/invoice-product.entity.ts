import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetUsagePlaceInvoiceProduct } from '@/modules/carpet-usage-place-invoice-product/entities/carpet-usage-place-invoice-product.entity';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { Design } from '@/modules/design/entities/design.entity';
import { Discount } from '@/modules/discount/entities/discount.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/entities/invoice-reversal-item.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/entities/subproduct-stock-history.entity';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/entities/returned-invoice-product.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';

@Index('invoice_products_design_id_index', ['designId'], {})
@Index('invoice_products_discount_id_index', ['discountId'], {})
@Index(
  'invoice_products_idx1_unique',
  ['invoiceId', 'subproductId', 'withPad', 'padId'],
  { unique: true },
)
@Index('invoice_products_invoice_id_index', ['invoiceId'], {})
@Index('invoice_products_pad_id_index', ['padId'], {})
@Index('invoice_products_product_id_index', ['productId'], {})
@Index('invoice_products_related_product_id_index', ['relatedProductId'], {})
@Index(
  'invoice_products_related_subproduct_id_index',
  ['relatedSubproductId'],
  {},
)
@Index('invoice_products_subproduct_id_index', ['subproductId'], {})
@Entity('invoice_products', { schema: 'modema' })
export class InvoiceProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'design_id', nullable: true, unsigned: true })
  designId?: number;

  @Column('int', { name: 'discount_id', nullable: true, unsigned: true })
  discountId?: number;

  @Column('double', {
    name: 'width',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  length?: number;

  @Column('double', {
    name: 'price_per_inch',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  pricePerInch?: number;

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
  discount?: string;

  @Column('smallint', { name: 'count', unsigned: true })
  count: number;

  @Column('smallint', { name: 'bundle_count', default: () => "'0'" })
  bundleCount: number;

  @Column('double', {
    name: 'total_price',
    nullable: true,
    unsigned: true,
    precision: 14,
    scale: 2,
  })
  totalPrice?: number;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount?: string;

  @Column('tinyint', {
    name: 'is_coupon_applicable',
    width: 1,
    default: () => "'0'",
  })
  isCouponApplicable: boolean;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount?: string;

  @Column('double', {
    name: 'designer_price_percentage',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  designerPricePercentage?: number;

  @Column('double', {
    name: 'designer_price_share',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  designerPriceShare?: number;

  @Column('tinyint', { name: 'with_pad', width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column('int', { name: 'pad_id', nullable: true, unsigned: true })
  padId?: number;

  @Column('int', { name: 'related_product_id', nullable: true, unsigned: true })
  relatedProductId?: number;

  @Column('int', {
    name: 'related_subproduct_id',
    nullable: true,
    unsigned: true,
  })
  relatedSubproductId?: number;

  @Column('tinyint', {
    name: 'invoice_product_items_created',
    width: 1,
    default: () => "'0'",
  })
  invoiceProductItemsCreated: boolean;

  @Column('int', { name: 'items_to_produce', nullable: true })
  itemsToProduce?: number;

  @Column('int', { name: 'items_from_depot', nullable: true })
  itemsFromDepot?: number;

  @Column('int', { name: 'stock_count', nullable: true })
  stockCount?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', {
    name: 'temp_depot_items_created',
    width: 1,
    default: () => "'0'",
  })
  tempDepotItemsCreated: boolean;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('smallint', { name: 'gift', default: () => "'0'" })
  gift: number;

  @Column('tinyint', { name: 'manually_added', width: 1, default: () => "'0'" })
  manuallyAdded: boolean;

  @OneToMany(
    () => CarpetUsagePlaceInvoiceProduct,
    (carpetUsagePlaceInvoiceProduct) =>
      carpetUsagePlaceInvoiceProduct.invoiceProduct,
  )
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.invoiceProduct,
  )
  invoiceProductHistories: InvoiceProductHistory[];

  @OneToMany(
    () => InvoiceProductItem,
    (invoiceProductItem) => invoiceProductItem.invoiceProduct,
  )
  invoiceProductItems: InvoiceProductItem[];

  @ManyToOne(() => Design, (design) => design.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'design_id', referencedColumnName: 'id' }])
  design: Design;

  @ManyToOne(() => Discount, (discount) => discount.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount_2: Discount;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.invoiceProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'pad_id', referencedColumnName: 'id' }])
  pad: Subproduct;

  @ManyToOne(() => Product, (product) => product.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Product, (product) => product.invoiceProducts2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_product_id', referencedColumnName: 'id' }])
  relatedProduct: Product;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.invoiceProducts2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_subproduct_id', referencedColumnName: 'id' }])
  relatedSubproduct: Subproduct;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.invoiceProducts3, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @OneToMany(
    () => InvoiceReversalItem,
    (invoiceReversalItem) => invoiceReversalItem.invoiceProduct,
  )
  invoiceReversalItems: InvoiceReversalItem[];

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.invoiceProduct,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.invoiceProduct,
  )
  returnRequestItems: ReturnRequestItem[];

  @OneToMany(
    () => ReturnedInvoiceProduct,
    (returnedInvoiceProduct) => returnedInvoiceProduct.invoiceProduct,
  )
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @OneToMany(
    () => SubproductStockHistory,
    (subproductStockHistory) => subproductStockHistory.invoiceProduct,
  )
  subproductStockHistories: SubproductStockHistory[];
}
