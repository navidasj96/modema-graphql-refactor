import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'rip_template_items_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Index('rip_template_items_rip_template_id_index', ['ripTemplateId'], {})
@Entity('rip_template_items', { schema: 'modema' })
export class RipTemplateItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'rip_template_id', unsigned: true })
  ripTemplateId: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('double', { name: 'width', precision: 10, scale: 2 }) // ✅ Fixed precision
  width: number;

  @Column('double', { name: 'length', precision: 10, scale: 2 }) // ✅ Fixed precision
  length: number;
}
