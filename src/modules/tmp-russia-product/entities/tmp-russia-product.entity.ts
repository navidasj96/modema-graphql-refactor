import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tmp_russia_products', { schema: 'modema' })
export class TmpRussiaProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'product_code', nullable: true, length: 20 })
  productCode?: string;

  @Column('varchar', { name: 'color_code', nullable: true, length: 20 })
  colorCode?: string;

  @Column('varchar', { name: 'size_code', nullable: true, length: 20 })
  sizeCode?: string;

  @Column('varchar', { name: 'border_code', nullable: true, length: 20 })
  borderCode?: string;

  @Column('varchar', { name: 'code', nullable: true, length: 50 })
  code?: string;

  @Column('int', { name: 'count', nullable: true })
  count?: number;
}
