import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('russian', { schema: 'modema' })
export class Russian {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'russian_name', nullable: true, length: 255 })
  russianName?: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name?: string;
}
