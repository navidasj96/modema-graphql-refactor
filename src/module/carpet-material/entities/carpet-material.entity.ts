import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('carpet_materials_name_unique', ['name'], { unique: true })
@Entity('carpet_materials', { schema: 'modema' })
export class CarpetMaterial {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  // ✅ FIX: Removed UNSIGNED and corrected precision format
  @Column('double', { name: 'price_per_inch', precision: 22, scale: 2 })
  pricePerInch: number;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
