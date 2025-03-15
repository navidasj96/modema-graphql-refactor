import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
