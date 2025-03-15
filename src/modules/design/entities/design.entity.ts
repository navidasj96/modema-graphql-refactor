import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('carpet_material_id', ['carpetMaterialId'], {})
@Index('designs_carpet_shape_id_index', ['carpetShapeId'], {})
@Index('designs_user_id_index', ['userId'], {})
@Entity('designs', { schema: 'modema' })
export class Design {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', {
    name: 'carpet_shape_id',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  carpetShapeId?: number;

  @Column('int', { name: 'carpet_material_id', nullable: true, unsigned: true })
  carpetMaterialId?: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', {
    name: 'background_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  backgroundColor?: string;

  @Column('varchar', {
    name: 'border_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  borderColor?: string;

  @Column('varchar', {
    name: 'fringe_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  fringeColor?: string;

  @Column('double', {
    name: 'width',
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  length?: number;

  @Column('varchar', {
    name: 'path',
    nullable: true,
    comment: 'Preview image path',
    length: 191,
    default: () => "'/'",
  })
  path?: string;

  @Column('varchar', {
    name: 'filename',
    nullable: true,
    comment: 'preview image file name',
    length: 191,
  })
  filename?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
