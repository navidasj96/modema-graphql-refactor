import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('sender_informations_city_id_foreign', ['cityId'], {})
@Index('sender_informations_country_id_foreign', ['countryId'], {})
@Index('sender_informations_state_id_foreign', ['stateId'], {})
@Entity('sender_informations', { schema: 'modema' })
export class SenderInformation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('varchar', { name: 'person_name', length: 191 })
  personName: string;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('varchar', { name: 'company_name', length: 191 })
  companyName: string;

  @Column('varchar', { name: 'phone_number', length: 191 })
  phoneNumber: string;

  @Column('varchar', { name: 'phone_extension', length: 191 })
  phoneExtension: string;

  @Column('varchar', { name: 'pager_number', length: 191 })
  pagerNumber: string;

  @Column('varchar', { name: 'fax_number', length: 191 })
  faxNumber: string;

  @Column('varchar', { name: 'email_address', length: 191 })
  emailAddress: string;

  @Column('varchar', { name: 'street_lines', length: 191 })
  streetLines: string;

  @Column('int', { name: 'city_id', nullable: true, unsigned: true })
  cityId?: number;

  @Column('int', { name: 'state_id', nullable: true, unsigned: true })
  stateId?: number;

  @Column('varchar', { name: 'postal_code', length: 191 })
  postalCode: string;

  @Column('int', { name: 'country_id', nullable: true, unsigned: true })
  countryId?: number;

  @Column('varchar', { name: 'package_location', length: 191 })
  packageLocation: string;

  @Column('varchar', { name: 'building_part', length: 191 })
  buildingPart: string;

  @Column('varchar', { name: 'building_part_description', length: 191 })
  buildingPartDescription: string;

  @Column('varchar', { name: 'location', length: 191 })
  location: string;

  @Column('text', { name: 'remarks' })
  remarks: string;

  @Column('text', { name: 'commodity_description' })
  commodityDescription: string;

  @Column('varchar', { name: 'latitude', nullable: true, length: 191 })
  latitude?: string;

  @Column('varchar', { name: 'longitude', nullable: true, length: 191 })
  longitude?: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
