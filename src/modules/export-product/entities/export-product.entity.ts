import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('export_products', { schema: 'modema' })
export class ExportProduct {
  @PrimaryGeneratedColumn()
  1: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('double', { name: 'price', nullable: true, precision: 14, scale: 2 })
  price?: number;
}
