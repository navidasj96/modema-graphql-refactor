import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer';
import { City } from '@/modules/city/domain/city';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';
import { SenderInformation } from '@/modules/sender-information/domain/sender-information';
import { Country } from '@/modules/country/domain/country';

@ObjectType()
export class State {
  @IDField(() => ID)
  id: number;

  @Field()
  countryId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

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

  @Field(() => [City])
  cities: City[];

  @Field(() => [InvoiceAddress])
  invoiceAddresses: InvoiceAddress[];

  @Field(() => [ReturnRequestAddress])
  returnRequestAddresses: ReturnRequestAddress[];

  @Field(() => [SenderInformation])
  senderInformations: SenderInformation[];

  @Field(() => Country)
  country: Country;
}
