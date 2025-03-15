import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('customer_image_product_image_id_index', ['imageId'], {})
@Index('customer_image_product_product_id_index', ['productId'], {})
@Entity('customer_image_product', { schema: 'modema' })
export class CustomerImageProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

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
