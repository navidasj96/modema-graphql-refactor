import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'torob_products_basic_carpet_color_id_foreign',
  ['basicCarpetColorId'],
  {},
)
@Index('torob_products_basic_carpet_size_id_foreign', ['basicCarpetSizeId'], {})
@Index('torob_products_product_id_foreign', ['productId'], {})
@Index('torob_products_subproduct_id_foreign', ['subproductId'], {})
@Entity('torob_products', { schema: 'modema' })
export class TorobProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'size_title', nullable: true, length: 191 })
  sizeTitle?: string;

  @Column('varchar', { name: 'color_title', nullable: true, length: 191 })
  colorTitle?: string;

  @Column('varchar', { name: 'torob_category', nullable: true, length: 191 })
  torobCategory?: string;

  @Column('int', {
    name: 'basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId?: number;

  @Column('int', {
    name: 'basic_carpet_color_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId?: number;

  @Column('int', {
    name: 'product_category_id',
    nullable: true,
    unsigned: true,
  })
  productCategoryId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
