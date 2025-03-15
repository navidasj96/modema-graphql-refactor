import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('label_product_label_id_index', ['labelId'], {})
@Index('label_product_product_id_index', ['productId'], {})
@Entity('label_product', { schema: 'modema' })
export class LabelProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'label_id', unsigned: true })
  labelId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
