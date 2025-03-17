import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('states_chapar_id_index', ['chaparId'], {})
@Index('states_country_id_index', ['countryId'], {})
@Index('states_tipax_id_index', ['tipaxId'], {})
@Entity('states', { schema: 'modema' })
export class State {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'country_id', unsigned: true })
  countryId: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'code', nullable: true, length: 5 })
  code?: string;

  @Column('int', { name: 'chapar_id', nullable: true })
  chaparId?: number;

  @Column('int', { name: 'tipax_id', nullable: true })
  tipaxId?: number;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
