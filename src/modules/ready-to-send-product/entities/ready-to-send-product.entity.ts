import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('ready_to_send_products_product_id_index', ['productId'], {})
@Entity('ready_to_send_products', { schema: 'modema' })
export class ReadyToSendProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
