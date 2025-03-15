import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('migrations', { schema: 'modema' })
export class Migration {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'migration', length: 191 })
  migration: string;

  @Column('int', { name: 'batch' })
  batch: number;
}
