import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('basic_carpet_types_code_unique', ['code'], { unique: true })
@Index('basic_carpet_types_title_unique', ['title'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_types', { schema: 'modema' })
export class BasicCarpetType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 2 })
  code: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
