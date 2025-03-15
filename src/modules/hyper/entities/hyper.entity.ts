import { Column, Entity, Index } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Entity('hyper', { schema: 'modema' })
export class Hyper {
  @Column('varchar', { primary: true, name: 'code', length: 45 })
  code: string;

  @Column('int', { name: 'depot', nullable: true })
  depot?: number;

  @Column('int', { name: 'produce', nullable: true })
  produce?: number;
}
