import { Column, Entity, Index } from 'typeorm';

@Index('temp_subproduct_discounts_all_discount_id_index', ['allDiscountId'], {})
@Index(
  'temp_subproduct_discounts_all_with_stock_discount_id_index',
  ['allWithStockDiscountId'],
  {},
)
@Index(
  'temp_subproduct_discounts_category_discount_id_index',
  ['categoryDiscountId'],
  {},
)
@Index(
  'temp_subproduct_discounts_price_group_discount_id_index',
  ['priceGroupDiscountId'],
  {},
)
@Index(
  'temp_subproduct_discounts_product_discount_id_index',
  ['productDiscountId'],
  {},
)
@Index(
  'temp_subproduct_discounts_size_discount_id_index',
  ['sizeDiscountId'],
  {},
)
@Index(
  'temp_subproduct_discounts_subproduct_discount_id_index',
  ['subproductDiscountId'],
  {},
)
@Index('temp_subproduct_discounts_view_product_id_index', ['viewProductId'], {})
@Entity('temp_subproduct_discounts', { schema: 'modema' })
export class TempSubproductDiscount {
  @Column('int', { primary: true, name: 'view_subproduct_id' })
  viewSubproductId: number;

  @Column('int', { name: 'view_product_id' })
  viewProductId: number;

  @Column('int', { name: 'subproduct_discount_id', nullable: true })
  subproductDiscountId?: number;

  @Column('int', { name: 'product_discount_id', nullable: true })
  productDiscountId?: number;

  @Column('int', { name: 'category_discount_id', nullable: true })
  categoryDiscountId?: number;

  @Column('int', { name: 'size_discount_id', nullable: true })
  sizeDiscountId?: number;

  @Column('int', { name: 'price_group_discount_id', nullable: true })
  priceGroupDiscountId?: number;

  @Column('int', { name: 'all_with_stock_discount_id', nullable: true })
  allWithStockDiscountId?: number;

  @Column('int', { name: 'all_discount_id', nullable: true })
  allDiscountId?: number;

  @Column('decimal', {
    name: 'price_minus_discount',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  priceMinusDiscount?: string;

  @Column('decimal', {
    name: 'pad_price_minus_discount',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  padPriceMinusDiscount?: string;

  @Column('double', {
    name: 'discount_percent',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  discountPercent?: number;

  @Column('double', {
    name: 'pad_discount_percent',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  padDiscountPercent?: number;

  @Column('double', {
    name: 'total_discount_percent',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  totalDiscountPercent?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
