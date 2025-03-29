import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Attribute } from '@/modules/attribute/entities/attribute.entity';
import { AttributeItem } from '@/modules/attribute-item/entities/attribute-item.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index('attribute_product_attribute_id_index', ['attributeId'], {})
@Index('attribute_product_attribute_item_id_index', ['attributeItemId'], {})
@Index(
  'attribute_product_product_id_attribute_id_unique',
  ['productId', 'attributeId'],
  { unique: true },
)
@Index('attribute_product_product_id_index', ['productId'], {})
@Entity('attribute_product', { schema: 'modema' })
export class AttributeProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;

  @Column('int', { name: 'attribute_item_id', nullable: true, unsigned: true })
  attributeItemId?: number;

  @Column('text', { name: 'value', nullable: true })
  value?: string;

  @Column('tinyint', { name: 'is_checked', nullable: true, width: 1 })
  isChecked?: boolean;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Attribute, (attribute) => attribute.attributeProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attribute;

  @ManyToOne(
    () => AttributeItem,
    (attributeItem) => attributeItem.attributeProducts,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_item_id', referencedColumnName: 'id' }])
  attributeItem?: AttributeItem;

  @ManyToOne(() => Product, (product) => product.attributeProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
