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
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index('attribute_subproduct_attribute_id_index', ['attributeId'], {})
@Index('attribute_subproduct_attribute_item_id_index', ['attributeItemId'], {})
@Index('attribute_subproduct_subproduct_id_index', ['subproductId'], {})
@Entity('attribute_subproduct', { schema: 'modema' })
export class AttributeSubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('int', { name: 'attribute_item_id', nullable: true, unsigned: true })
  attributeItemId?: number;

  @Column('text', { name: 'value', nullable: true })
  value?: string;

  @Column('tinyint', { name: 'is_checked', nullable: true, width: 1 })
  isChecked?: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Attribute, (attribute) => attribute.attributeSubproducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attribute;

  @ManyToOne(
    () => AttributeItem,
    (attributeItem) => attributeItem.attributeSubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'attribute_item_id', referencedColumnName: 'id' }])
  attributeItem?: AttributeItem;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.attributeSubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;
}
