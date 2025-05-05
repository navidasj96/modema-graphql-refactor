import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer';
import { State } from '@/modules/state/domain/state';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';
import { SenderInformation } from '@/modules/sender-information/domain/sender-information';

@InputType('CityDomain')
@ObjectType()
export class City {
  @IDField(() => ID)
  id: number;

  @Field()
  stateId: number;

  @FilterableField()
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

  @Field(() => [Address])
  addresses: Address[];

  @Field(() => [BasicCarpetDesigner])
  basicCarpetDesigners: BasicCarpetDesigner[];

  @Field(() => State)
  state: State;

  @Field(() => [InvoiceAddress])
  invoiceAddresses: InvoiceAddress[];

  @Field(() => [ReturnRequestAddress])
  returnRequestAddresses: ReturnRequestAddress[];

  @Field(() => [SenderInformation])
  senderInformations: SenderInformation[];
}
