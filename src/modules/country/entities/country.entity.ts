import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '@/modules/address/entities/address.entity';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/entities/basic-carpet-designer.entity';
import { ContactForm } from '@/modules/contact-form/entities/contact-form.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { SenderInformation } from '@/modules/sender-information/entities/sender-information.entity';
import { State } from '@/modules/state/entities/state.entity';

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

  @OneToMany(() => Address, (address) => address.country)
  addresses: Address[];

  @OneToMany(
    () => BasicCarpetDesigner,
    (basicCarpetDesigner) => basicCarpetDesigner.country
  )
  basicCarpetDesigners: BasicCarpetDesigner[];

  @OneToMany(() => ContactForm, (contactForm) => contactForm.country)
  contactForms: ContactForm[];

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.country)
  invoiceAddresses: InvoiceAddress[];

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.country
  )
  returnRequestAddresses: ReturnRequestAddress[];

  @OneToMany(
    () => SenderInformation,
    (senderInformation) => senderInformation.country
  )
  senderInformations: SenderInformation[];

  @OneToMany(() => State, (state) => state.country)
  states: State[];
}
