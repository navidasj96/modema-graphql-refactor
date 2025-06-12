import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index('coupon_subjects_basic_carpet_size_id_index', ['basicCarpetSizeId'], {})
@Index('coupon_subjects_coupon_id_index', ['couponId'], {})
@Index('coupon_subjects_product_category_id_index', ['productCategoryId'], {})
@Index('coupon_subjects_product_id_index', ['productId'], {})
@Index('coupon_subjects_subproduct_id_index', ['subproductId'], {})
@Entity('coupon_subjects', { schema: 'modema' })
export class CouponSubject {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'coupon_id', unsigned: true })
  couponId: number;

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

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.couponSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(() => Coupon, (coupon) => coupon.couponSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupon;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.couponSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategory;

  @ManyToOne(() => Product, (products) => products.couponSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.couponSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
