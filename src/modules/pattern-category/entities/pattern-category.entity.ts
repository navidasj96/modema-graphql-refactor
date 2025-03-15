import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pattern_categories_image_id_index', ['imageId'], {})
@Entity('pattern_categories', { schema: 'modema' })
export class PatternCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('int', {
    name: 'view_counter',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
