import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';
import { Attribute } from '@/modules/attribute/entities/attribute.entity';
import { AttributeProduct } from '@/modules/attribute-product/entities/attribute-product.entity';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/entities/attribute-subproduct.entity';

@Index('attribute_group_id', ['attributeGroupId'], {})
@Index('attribute_items_attribute_id_index', ['attributeId'], {})
@Entity('attribute_items', { schema: 'modema' })
export class AttributeItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;

  @Column('int', { name: 'attribute_group_id', nullable: true, unsigned: true })
  attributeGroupId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => AttributeGroup,
    (attributeGroup) => attributeGroup.attributeItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_group_id', referencedColumnName: 'id' }])
  attributeGroup?: AttributeGroup;

  @ManyToOne(() => Attribute, (attribute) => attribute.attributeItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attribute;

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attributeItem,
  )
  attributeProducts?: AttributeProduct[];

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attributeItem,
  )
  attributeSubproducts?: AttributeSubproduct[];
}
