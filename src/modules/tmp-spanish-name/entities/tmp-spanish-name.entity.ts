import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tmp_spanish_names', { schema: 'modema' })
export class TmpSpanishName {
  @PrimaryGeneratedColumn()
  name?: string;

  @Column('varchar', { name: 'title', nullable: true, length: 192 })
  title?: string;

  @Column('varchar', { name: 'name_es', nullable: true, length: 192 })
  nameEs?: string;

  @Column('varchar', { name: 'spanish_title', nullable: true, length: 192 })
  spanishTitle?: string;

  @Column('int', { name: 'product_id', nullable: true })
  productId?: number;

  @Column('int', { name: 'color_id', nullable: true })
  colorId?: number;
}
