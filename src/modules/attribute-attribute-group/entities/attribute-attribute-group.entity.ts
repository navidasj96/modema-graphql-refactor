import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';
import { Attribute } from '@/modules/attribute/entities/attribute.entity';

@Index(
  'attribute_attribute_group_attribute_group_id_index',
  ['attributeGroupId'],
  {},
)
@Index('attribute_attribute_group_attribute_id_index', ['attributeId'], {})
@Entity('attribute_attribute_group', { schema: 'modema' })
export class AttributeAttributeGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;

  @Column('int', { name: 'attribute_group_id', unsigned: true })
  attributeGroupId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => AttributeGroup,
    (attributeGroups) => attributeGroups.attributeAttributeGroups,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_group_id', referencedColumnName: 'id' }])
  attributeGroup: AttributeGroup;

  @ManyToOne(
    () => Attribute,
    (attributes) => attributes.attributeAttributeGroups,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attribute;
}
