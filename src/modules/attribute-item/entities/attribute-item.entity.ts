import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
