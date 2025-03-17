import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('return_request_addresses_address_id_index', ['addressId'], {})
@Index('return_request_addresses_city_id_index', ['cityId'], {})
@Index('return_request_addresses_country_id_index', ['countryId'], {})
@Index(
  'return_request_addresses_return_request_id_index',
  ['returnRequestId'],
  {},
)
@Index('return_request_addresses_state_id_index', ['stateId'], {})
@Index('return_request_addresses_user_id_index', ['userId'], {})
@Entity('return_request_addresses', { schema: 'modema' })
export class ReturnRequestAddress {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_id', unsigned: true })
  returnRequestId: number;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'country_id', unsigned: true })
  countryId: number;

  @Column('int', { name: 'state_id', unsigned: true })
  stateId: number;

  @Column('int', { name: 'city_id', unsigned: true })
  cityId: number;

  @Column('varchar', { name: 'fullname', nullable: true, length: 191 })
  fullname?: string;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode?: string;

  @Column('varchar', {
    name: 'address',
    comment: 'First Line of Address',
    length: 191,
  })
  address: string;

  @Column('varchar', {
    name: 'address2',
    nullable: true,
    comment: 'Optional Second Line of Address',
    length: 191,
  })
  address2?: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('varchar', { name: 'phone2', nullable: true, length: 191 })
  phone2?: string;

  @Column('varchar', { name: 'longitude', nullable: true, length: 191 })
  longitude?: string;

  @Column('varchar', { name: 'latitude', nullable: true, length: 191 })
  latitude?: string;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email?: string;

  @Column('varchar', { name: 'full_address', nullable: true, length: 191 })
  fullAddress?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
