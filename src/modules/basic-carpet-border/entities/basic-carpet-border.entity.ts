import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index('basic_carpet_borders_code_unique', ['code'], { unique: true })
@Index('basic_carpet_borders_sort_order_index', ['sortOrder'], {})
@Index('basic_carpet_borders_title_unique', ['title'], { unique: true })
@Entity('basic_carpet_borders', { schema: 'modema' })
export class BasicCarpetBorder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 4 })
  code: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Subproduct, (subproduct) => subproduct.basicCarpetBorder)
  subproducts: Subproduct[];
}
