import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('countries_chapar_id_index', ['chaparId'], {})
@Index('countries_phone_code_index', ['phoneCode'], {})
@Index('countries_tipax_id_index', ['tipaxId'], {})
@Index('sort_name', ['sortName'], { unique: true })
@Entity('countries', { schema: 'modema' })
export class Country {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', {
    name: 'sort_name',
    nullable: true,
    unique: true,
    length: 3,
  })
  sortName?: string;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('int', { name: 'phone_code', nullable: true, unsigned: true })
  phoneCode?: number;

  @Column('int', { name: 'chapar_id', nullable: true })
  chaparId?: number;

  @Column('int', { name: 'tipax_id', nullable: true })
  tipaxId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
