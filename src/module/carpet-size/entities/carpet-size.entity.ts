import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('carpet_sizes_width_length_unique', ['width', 'length'], {
  unique: true,
})
@Entity('carpet_sizes', { schema: 'modema' })
export class CarpetSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('double', {
    name: 'width',
    unsigned: true,
    precision: 22,
    default: () => "'0'",
  })
  width: number;

  @Column('double', {
    name: 'length',
    unsigned: true,
    precision: 22,
    default: () => "'0'",
  })
  length: number;

  @Column('tinyint', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
