import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Design } from '@/modules/design/entities/design.entity';

@Entity('carpet_shapes', { schema: 'modema' })
export class CarpetShape {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  // ✅ FIX: Correct precision format for DOUBLE
  @Column('double', { name: 'min_width', precision: 22, scale: 2 })
  minWidth: number;

  @Column('double', { name: 'max_width', precision: 22, scale: 2 })
  maxWidth: number;

  @Column('double', { name: 'min_length', precision: 22, scale: 2 })
  minLength: number;

  @Column('double', { name: 'max_length', precision: 22, scale: 2 })
  maxLength: number;

  @Column('tinyint', { name: 'has_length', width: 1, default: () => "'1'" })
  hasLength: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @OneToMany(() => Design, (design) => design.carpetShape)
  designs: Design[];
}
