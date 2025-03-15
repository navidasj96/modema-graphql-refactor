import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities2', { schema: 'modema' })
export class City2 {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;
}
