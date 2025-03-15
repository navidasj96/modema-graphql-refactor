import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'discount_subjects_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Index(
  'discount_subjects_discount_id_basic_carpet_size_id_unique',
  ['discountId', 'basicCarpetSizeId'],
  { unique: true },
)
@Index('discount_subjects_discount_id_index', ['discountId'], {})
@Index(
  'discount_subjects_discount_id_price_group_id_unique',
  ['discountId', 'priceGroupId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_product_category_id_unique',
  ['discountId', 'productCategoryId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_product_id_unique',
  ['discountId', 'productId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_subproduct_id_unique',
  ['discountId', 'subproductId'],
  { unique: true },
)
@Index('discount_subjects_price_group_id_index', ['priceGroupId'], {})
@Index('discount_subjects_product_category_id_index', ['productCategoryId'], {})
@Index('discount_subjects_product_id_index', ['productId'], {})
@Index('discount_subjects_subproduct_id_index', ['subproductId'], {})
@Entity('discount_subjects', { schema: 'modema' })
export class DiscountSubject {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'discount_id', unsigned: true })
  discountId: number;

  @Column('int', {
    name: 'product_category_id',
    nullable: true,
    unsigned: true,
  })
  productCategoryId?: number;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', {
    name: 'basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId?: number;

  @Column('int', { name: 'price_group_id', nullable: true, unsigned: true })
  priceGroupId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
