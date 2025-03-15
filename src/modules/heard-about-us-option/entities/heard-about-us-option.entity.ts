import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('heard_about_us_options_name_unique', ['name'], { unique: true })
@Entity('heard_about_us_options', { schema: 'modema' })
export class HeardAboutUsOption {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('int', { name: 'sort_order', unsigned: true, default: () => "'1'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
