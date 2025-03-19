import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Color } from '@/modules/color/entities/color.entity';

@Index('color_id', ['colorId'], {})
@Entity('subcolors', { schema: 'modema' })
export class Subcolor {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('varchar', { name: 'colorName', nullable: true, length: 20 })
  colorName?: string;

  @Column('varchar', { name: 'colorCode', nullable: true, length: 20 })
  colorCode?: string;

  @Column('varchar', { name: 'hexCode', nullable: true, length: 20 })
  hexCode?: string;

  @Column('int', { name: 'color_id', nullable: true, unsigned: true })
  colorId?: number;

  @Column('int', { name: 'order', nullable: true })
  order?: number;

  @Column('varchar', { name: 'colorCode_original', nullable: true, length: 20 })
  colorCodeOriginal?: string;

  @ManyToOne(() => Color, (colors) => colors.subcolors, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'color_id', referencedColumnName: 'id' }])
  color: Color;
}
