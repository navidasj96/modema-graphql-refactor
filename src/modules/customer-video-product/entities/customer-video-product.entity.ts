import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('customer_video_product_product_id_index', ['productId'], {})
@Index('customer_video_product_video_id_index', ['videoId'], {})
@Entity('customer_video_product', { schema: 'modema' })
export class CustomerVideoProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'video_id', unsigned: true })
  videoId: number;

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
