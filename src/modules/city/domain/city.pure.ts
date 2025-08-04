import { AddressPure } from '@/modules/address/domain/address.pure';
import { BasicCarpetDesignerPure } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { SenderInformationPure } from '@/modules/sender-information/domain/sender-information.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CityPureDomain')
@ObjectType()
export class CityPure {
  @Field(() => ID)
  id: number;

  @Field()
  stateId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  mahexCode?: string;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [AddressPure])
  addresses: AddressPure[];

  @Field(() => [BasicCarpetDesignerPure])
  basicCarpetDesigners: BasicCarpetDesignerPure[];

  @Field(() => StatePure)
  state: StatePure;

  @Field(() => [InvoiceAddressPure])
  invoiceAddresses: InvoiceAddressPure[];

  @Field(() => [ReturnRequestAddressPure])
  returnRequestAddresses: ReturnRequestAddressPure[];

  @Field(() => [SenderInformationPure])
  senderInformations: SenderInformationPure[];
}
