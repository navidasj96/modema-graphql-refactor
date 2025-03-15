import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Index('id', ['id'], { unique: true })
@Entity('borders', { schema: 'modema' })
export class Border {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', { name: 'code', length: 50 })
  code: string;

  @Column('int', { name: 'count', nullable: true })
  count?: number;
}
