import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '@/modules/product/entities/product.entity';
import { Label } from '@/modules/label/entities/label.entity';

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

  @ManyToOne(() => Label, (label) => label.labelProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'label_id', referencedColumnName: 'id' }])
  label: Label;

  @ManyToOne(() => Product, (product) => product.labelProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
