import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('basic_carpet_colors_code_unique', ['code'], { unique: true })
@Index('basic_carpet_colors_russian_title_unique', ['russianTitle'], {
  unique: true,
})
@Index('basic_carpet_colors_short_code_unique', ['shortCode'], { unique: true })
@Index('basic_carpet_colors_spanish_title_unique', ['spanishTitle'], {
  unique: true,
})
@Index('basic_carpet_colors_title_unique', ['title'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_colors', { schema: 'modema' })
export class BasicCarpetColor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 2 })
  code: string;

  @Column('varchar', {
    name: 'short_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  shortCode?: string;

  @Column('varchar', { name: 'color_code', nullable: true, length: 191 })
  colorCode?: string;

  @Column('varchar', {
    name: 'russian_title',
    nullable: true,
    unique: true,
    length: 191,
  })
  russianTitle?: string;

  @Column('varchar', { name: 'persian_title', nullable: true, length: 191 })
  persianTitle?: string;

  @Column('varchar', { name: 'english_title', nullable: true, length: 191 })
  englishTitle?: string;

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

  @Column('varchar', {
    name: 'spanish_title',
    nullable: true,
    unique: true,
    length: 191,
  })
  spanishTitle?: string;
}
