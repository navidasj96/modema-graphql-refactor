import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('patterns_pattern_category_id_index', ['patternCategoryId'], {})
@Entity('patterns', { schema: 'modema' })
export class Pattern {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'pattern_category_id', unsigned: true })
  patternCategoryId: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('text', {
    name: 'keywords',
    nullable: true,
    comment: 'comma separated',
  })
  keywords?: string;

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

  @Column('varchar', { name: 'filename', nullable: true, length: 191 })
  filename?: string;

  @Column('varchar', {
    name: 'thumbnail_filename',
    nullable: true,
    length: 191,
  })
  thumbnailFilename?: string;

  @Column('varchar', { name: 'mime', nullable: true, length: 191 })
  mime?: string;

  @Column('varchar', { name: 'original_filename', nullable: true, length: 191 })
  originalFilename?: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
