import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('addresses_city_id_index', ['cityId'], {})
@Index('addresses_country_id_index', ['countryId'], {})
@Index('addresses_crm_company_id_index', ['crmCompanyId'], {})
@Index('addresses_crm_company_person_id_index', ['crmCompanyPersonId'], {})
@Index('addresses_state_id_index', ['stateId'], {})
@Index('addresses_user_id_index', ['userId'], {})
@Entity('addresses', { schema: 'modema' })
export class Address {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

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

  @Column('text', { name: 'full_address', nullable: true })
  fullAddress?: string;

  @Column('varchar', { name: 'national_id', nullable: true, length: 191 })
  nationalId?: string;

  @Column('bigint', { name: 'crm_company_id', nullable: true, unsigned: true })
  crmCompanyId?: string;

  @Column('bigint', {
    name: 'crm_company_person_id',
    nullable: true,
    unsigned: true,
  })
  crmCompanyPersonId?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @Column('text', { name: 'old_address' })
  oldAddress: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('varchar', { name: 'fullname_trimmed', nullable: true, length: 255 })
  fullnameTrimmed?: string;

  @Column('varchar', {
    name: 'fullname_description',
    nullable: true,
    length: 255,
  })
  fullnameDescription?: string;
}
