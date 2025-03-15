import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'product_color_images_basic_carpet_color_id_index',
  ['basicCarpetColorId'],
  {},
)
@Index('product_color_images_image_id_index', ['imageId'], {})
@Index('product_color_images_product_id_index', ['productId'], {})
@Entity('product_color_images', { schema: 'modema' })
export class ProductColorImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', {
    name: 'basic_carpet_color_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId?: number;

  @Column('int', {
    name: 'sort_order',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sortOrder?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
