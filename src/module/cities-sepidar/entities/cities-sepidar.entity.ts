import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('cities_sepidar', { schema: 'modema' })
export class CitiesSepidar {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name?: string;

  @Column('varchar', { name: 'state_name', nullable: true, length: 255 })
  stateName?: string;

  @Column('int', { name: 'sepidar_state_id', nullable: true, unsigned: true })
  sepidarStateId?: number;

  @Column('int', { name: 'state_id', nullable: true, unsigned: true })
  stateId?: number;

  @Column('int', { name: 'city_id', nullable: true, unsigned: true })
  cityId?: number;
}
