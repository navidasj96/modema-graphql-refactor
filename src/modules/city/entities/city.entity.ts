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
import { State } from '@/modules/state/entities/state.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { SenderInformation } from '@/modules/sender-information/entities/sender-information.entity';

@Index('cities_chapar_id_index', ['chaparId'], {})
@Index('cities_mahex_code_index', ['mahexCode'], {})
@Index('cities_state_id_index', ['stateId'], {})
@Index('cities_tipax_id_index', ['tipaxId'], {})
@Entity('cities', { schema: 'modema' })
export class City {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'state_id', unsigned: true })
  stateId: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('int', { name: 'chapar_id', nullable: true })
  chaparId?: number;

  @Column('int', { name: 'tipax_id', nullable: true })
  tipaxId?: number;

  @Column('varchar', { name: 'mahex_code', nullable: true, length: 191 })
  mahexCode?: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  @OneToMany(
    () => BasicCarpetDesigner,
    (basicCarpetDesigner) => basicCarpetDesigner.city
  )
  basicCarpetDesigners: BasicCarpetDesigner[];

  @ManyToOne(() => State, (state) => state.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: State;

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.city)
  invoiceAddresses: InvoiceAddress[];

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.city
  )
  returnRequestAddresses: ReturnRequestAddress[];

  @OneToMany(
    () => SenderInformation,
    (senderInformation) => senderInformation.city
  )
  senderInformations: SenderInformation[];
}
