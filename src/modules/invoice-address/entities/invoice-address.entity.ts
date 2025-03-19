import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '@/modules/address/entities/address.entity';
import { City } from '@/modules/city/entities/city.entity';
import { Country } from '@/modules/country/entities/country.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { State } from '@/modules/state/entities/state.entity';
import { User } from '@/modules/user/entities/user.entity';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';

@Index('invoice_addresses_address_id_index', ['addressId'], {})
@Index('invoice_addresses_city_id_index', ['cityId'], {})
@Index('invoice_addresses_country_id_index', ['countryId'], {})
@Index('invoice_addresses_crm_company_id_index', ['crmCompanyId'], {})
@Index(
  'invoice_addresses_crm_company_person_id_index',
  ['crmCompanyPersonId'],
  {},
)
@Index('invoice_addresses_invoice_id_index', ['invoiceId'], {})
@Index('invoice_addresses_state_id_index', ['stateId'], {})
@Index('invoice_addresses_user_id_index', ['userId'], {})
@Entity('invoice_addresses', { schema: 'modema' })
export class InvoiceAddress {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

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

  @ManyToOne(() => Address, (address) => address.invoiceAddresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address_2: Address;

  @ManyToOne(() => City, (city) => city.invoiceAddresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'id' }])
  city: City;

  @ManyToOne(() => Country, (country) => country.invoiceAddresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Country;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceAddresses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @ManyToOne(() => State, (state) => state.invoiceAddresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: State;

  @ManyToOne(() => User, (user) => user.invoiceAddresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(
    () => InvoiceHistory,
    (invoiceHistory) => invoiceHistory.invoiceAddress,
  )
  invoiceHistories: InvoiceHistory[];
}
