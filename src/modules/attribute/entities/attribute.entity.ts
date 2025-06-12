import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeItem } from '@/modules/attribute-item/entities/attribute-item.entity';
import { AttributeProduct } from '@/modules/attribute-product/entities/attribute-product.entity';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/entities/attribute-subproduct.entity';
import { AttributeAttributeGroup } from '@/modules/attribute-attribute-group/entities/attribute-attribute-group.entity';

@Index('attributes_name_unique', ['name'], { unique: true })
@Entity('attributes', { schema: 'modema' })
export class Attribute {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('int', {
    name: 'type',
    comment: '0=>text,1=>boolean,2=>select',
    default: () => "'0'",
  })
  type: number;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => AttributeAttributeGroup,
    (attributeAttributeGroup) => attributeAttributeGroup.attribute
  )
  attributeAttributeGroups?: AttributeAttributeGroup[];

  @OneToMany(() => AttributeItem, (attributeItem) => attributeItem.attribute)
  attributeItems?: AttributeItem[];

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attribute
  )
  attributeProducts?: AttributeProduct[];

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attribute
  )
  attributeSubproducts?: AttributeSubproduct[];
}
