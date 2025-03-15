import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colors', { schema: 'modema' })
export class Color {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'colorName', nullable: true, length: 20 })
  colorName?: string;

  @Column('varchar', { name: 'colorCode', nullable: true, length: 20 })
  colorCode?: string;

  @Column('varchar', { name: 'hexCode', nullable: true, length: 20 })
  hexCode?: string;

  @Column('varchar', { name: 'colorCode_original', nullable: true, length: 20 })
  colorCodeOriginal?: string;
}
