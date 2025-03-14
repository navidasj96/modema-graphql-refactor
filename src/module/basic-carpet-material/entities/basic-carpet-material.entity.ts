import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('basic_carpet_materials_code_unique', ['code'], { unique: true })
@Index('basic_carpet_materials_title_unique', ['title'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_materials', { schema: 'modema' })
export class BasicCarpetMaterial {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 2 })
  code: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', default: 1 }) // ✅ Removed `width: 1`
  isActive: boolean;

  @Column('double', { name: 'price_per_inch', precision: 10, scale: 2 }) // ✅ Fixed double(22) issue
  pricePerInch: number;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
