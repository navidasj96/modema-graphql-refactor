import { Column, Entity, Index } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Index('subproduct_code', ['subproductCode'], { unique: true })
@Entity('hyperstar_codes', { schema: 'modema' })
export class HyperstarCode {
  @Column('varchar', { primary: true, name: 'code', length: 20 })
  code: string;

  @Column('varchar', {
    name: 'subproduct_code',
    nullable: true,
    unique: true,
    length: 40,
  })
  subproductCode?: string;
}
