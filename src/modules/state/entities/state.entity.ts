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
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/entities/basic-carpet-designer.entity';
import { City } from '@/modules/city/entities/city.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { SenderInformation } from '@/modules/sender-information/entities/sender-information.entity';
import { Country } from '@/modules/country/entities/country.entity';

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

  @OneToMany(() => Address, (addresses) => addresses.state)
  addresses: Address[];

  @OneToMany(
    () => BasicCarpetDesigner,
    (basicCarpetDesigner) => basicCarpetDesigner.state
  )
  basicCarpetDesigners: BasicCarpetDesigner[];

  @OneToMany(() => City, (city) => city.state)
  cities: City[];

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.state)
  invoiceAddresses: InvoiceAddress[];

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.state
  )
  returnRequestAddresses: ReturnRequestAddress[];

  @OneToMany(
    () => SenderInformation,
    (senderInformation) => senderInformation.state
  )
  senderInformations: SenderInformation[];

  @ManyToOne(() => Country, (country) => country.states, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Country;
}
