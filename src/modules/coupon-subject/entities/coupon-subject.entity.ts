import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
