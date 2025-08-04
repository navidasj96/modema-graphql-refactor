import { AddressPure } from '@/modules/address/domain/address.pure';
import { BasicCarpetDesignerPure } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer.pure';
import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { SenderInformationPure } from '@/modules/sender-information/domain/sender-information.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('StatePureDomain')
@ObjectType()
export class StatePure {
  @Field(() => ID)
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

  @Field(() => [AddressPure])
  addresses: AddressPure[];

  @Field(() => [BasicCarpetDesignerPure])
  basicCarpetDesigners: BasicCarpetDesignerPure[];

  @Field(() => [CityPure])
  cities: CityPure[];

  @Field(() => [InvoiceAddressPure])
  invoiceAddresses: InvoiceAddressPure[];

  @Field(() => [ReturnRequestAddressPure])
  returnRequestAddresses: ReturnRequestAddressPure[];

  @Field(() => [SenderInformationPure])
  senderInformations: SenderInformationPure[];

  @Field(() => CountryPure)
  country: CountryPure;
}
