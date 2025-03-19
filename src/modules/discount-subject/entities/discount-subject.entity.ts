import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { Discount } from '@/modules/discount/entities/discount.entity';
import { PriceGroup } from '@/modules/price-group/entities/price-group.entity';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

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

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.discountSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(() => Discount, (discount) => discount.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount: Discount;

  @ManyToOne(() => PriceGroup, (priceGroup) => priceGroup.discountSubjects, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'price_group_id', referencedColumnName: 'id' }])
  priceGroup: PriceGroup;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.discountSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategory;

  @ManyToOne(() => Product, (product) => product.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
