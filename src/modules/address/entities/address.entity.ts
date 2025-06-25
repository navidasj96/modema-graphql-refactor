import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/entities/invoice-rates-result.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/entities/invoice-address-validation-result.entity';
import { User } from '@/modules/user/entities/user.entity';
import { State } from '@/modules/state/entities/state.entity';
import { Country } from '@/modules/country/entities/country.entity';
import { City } from '@/modules/city/entities/city.entity';

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
  fullname: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

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
  address2: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone: string | null;

  @Column('varchar', { name: 'phone2', nullable: true, length: 191 })
  phone2: string | null;

  @Column('varchar', { name: 'longitude', nullable: true, length: 191 })
  longitude: string | null;

  @Column('varchar', { name: 'latitude', nullable: true, length: 191 })
  latitude: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('text', { name: 'full_address', nullable: true })
  fullAddress: string | null;

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

  @ManyToOne(() => City, (city) => city.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'id' }])
  city?: City;

  @ManyToOne(() => Country, (country) => country.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country?: Country;

  @ManyToOne(() => State, (state) => state.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state?: State;

  @ManyToOne(() => User, (user) => user.addresses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user?: User;

  @OneToMany(
    () => InvoiceAddressValidationResult,
    (invoiceAddressValidationResult) => invoiceAddressValidationResult.address
  )
  invoiceAddressValidationResults?: InvoiceAddressValidationResult[];

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.address_2)
  invoiceAddresses?: InvoiceAddress[];

  @OneToMany(
    () => InvoiceRatesResult,
    (invoiceRatesResult) => invoiceRatesResult.address
  )
  invoiceRatesResults?: InvoiceRatesResult[];

  @OneToMany(() => Invoice, (invoices) => invoices.address)
  invoices?: Invoice[];

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.address_2
  )
  returnRequestAddresses?: ReturnRequestAddress[];
}
