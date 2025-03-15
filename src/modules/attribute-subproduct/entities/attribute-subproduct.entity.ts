import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
