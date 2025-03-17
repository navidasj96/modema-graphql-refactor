import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rfm_report', { schema: 'modema' })
export class RfmReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', length: 191, default: () => "''" })
  name: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('varchar', { name: 'kharid1', length: 19 })
  kharid1: string;

  @Column('varchar', { name: 'kharid2', length: 19 })
  kharid2: string;

  @Column('varchar', { name: 'kharid3', length: 19 })
  kharid3: string;

  @Column('varchar', { name: 'kharid4', length: 19 })
  kharid4: string;

  @Column('varchar', { name: 'kharid5', length: 19 })
  kharid5: string;

  @Column('varchar', { name: 'kharid6', length: 19 })
  kharid6: string;

  @Column('varchar', { name: 'kharid7', length: 19 })
  kharid7: string;

  @Column('varchar', { name: 'kharid8', length: 19 })
  kharid8: string;

  @Column('varchar', { name: 'kharid9', length: 19 })
  kharid9: string;

  @Column('varchar', { name: 'kharid10', length: 19 })
  kharid10: string;

  @Column('varchar', { name: 'kharid11', length: 19 })
  kharid11: string;

  @Column('varchar', { name: 'kharid12', length: 19 })
  kharid12: string;

  @Column('varchar', { name: 'kharid13', length: 19 })
  kharid13: string;

  @Column('varchar', { name: 'kharid14', length: 19 })
  kharid14: string;

  @Column('varchar', { name: 'kharid15', length: 19 })
  kharid15: string;

  @Column('varchar', { name: 'kharid16', length: 19 })
  kharid16: string;

  @Column('varchar', { name: 'kharid17', length: 19 })
  kharid17: string;

  @Column('varchar', { name: 'kharid18', length: 19 })
  kharid18: string;

  @Column('varchar', { name: 'kharid19', length: 19 })
  kharid19: string;

  @Column('varchar', { name: 'kharid20', length: 19 })
  kharid20: string;
}
