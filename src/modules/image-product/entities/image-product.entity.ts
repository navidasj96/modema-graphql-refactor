import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('image_product_idx1', ['imageId', 'productId'], {})
@Index('image_product_image_id_index', ['imageId'], {})
@Index('image_product_product_id_index', ['productId'], {})
@Entity('image_product', { schema: 'modema' })
export class ImageProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('tinyint', {
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
