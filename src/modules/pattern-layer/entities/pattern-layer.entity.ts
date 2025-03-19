import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Design } from '@/modules/design/entities/design.entity';
import { Pattern } from '@/modules/pattern/entities/pattern.entity';

@Index('pattern_layers_design_id_index', ['designId'], {})
@Index('pattern_layers_pattern_id_index', ['patternId'], {})
@Entity('pattern_layers', { schema: 'modema' })
export class PatternLayer {
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

  @Column('tinyint', { name: 'repeat', unsigned: true, default: () => "'0'" })
  repeat: number;

  @Column('int', { name: 'pattern_id', unsigned: true })
  patternId: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Design, (designs) => designs.patternLayers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'design_id', referencedColumnName: 'id' }])
  design: Design;

  @ManyToOne(() => Pattern, (pattern) => pattern.patternLayers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'pattern_id', referencedColumnName: 'id' }])
  pattern: Pattern;
}
