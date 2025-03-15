import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('image_layers_design_id_index', ['designId'], {})
@Entity('image_layers', { schema: 'modema' })
export class ImageLayer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'design_id', unsigned: true })
  designId: number;

  @Column('double', {
    name: 'center_x',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  centerX: number;

  @Column('double', {
    name: 'center_y',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  centerY: number;

  @Column('double', {
    name: 'scale_x',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  scaleX: number;

  @Column('double', {
    name: 'scale_y',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  scaleY: number;

  @Column('int', { name: 'sort_order', default: () => "'1'" })
  sortOrder: number;

  @Column('double', {
    name: 'rotation',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  rotation: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
