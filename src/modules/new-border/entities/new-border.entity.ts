import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('new_borders', { schema: 'modema' })
export class NewBorder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'new_border', nullable: true, length: 20 })
  newBorder?: string;

  @Column('varchar', { name: 'old_border', nullable: true, length: 20 })
  oldBorder?: string;

  @Column('varchar', { name: 'color', nullable: true, length: 20 })
  color?: string;

  @Column('varchar', { name: 'sizes', nullable: true, length: 20 })
  sizes?: string;

  @Column('varchar', { name: 'material', nullable: true, length: 20 })
  material?: string;

  @Column('varchar', { name: 'designer', nullable: true, length: 20 })
  designer?: string;

  @Column('varchar', { name: 'design', nullable: true, length: 20 })
  design?: string;

  @Column('varchar', { name: 'brand', nullable: true, length: 20 })
  brand?: string;

  @Column('varchar', { name: 'type', nullable: true, length: 20 })
  type?: string;
}
