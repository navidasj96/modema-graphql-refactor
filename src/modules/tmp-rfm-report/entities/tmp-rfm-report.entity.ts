import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tmp_rfm_report', { schema: 'modema' })
export class TmpRfmReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', length: 191, default: () => "''" })
  name: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('decimal', { name: 'kharid1', precision: 10, scale: 0 })
  kharid1: string;

  @Column('decimal', { name: 'kharid2', precision: 10, scale: 0 })
  kharid2: string;

  @Column('decimal', { name: 'kharid3', precision: 10, scale: 0 })
  kharid3: string;

  @Column('decimal', { name: 'kharid4', precision: 10, scale: 0 })
  kharid4: string;

  @Column('decimal', { name: 'kharid5', precision: 10, scale: 0 })
  kharid5: string;
}
