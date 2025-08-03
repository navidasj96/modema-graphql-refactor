import { AddressPure } from '@/modules/address/domain/address.pure';
import { BasicCarpetDesignerPure } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer.pure';
import { ContactFormPure } from '@/modules/contact-form/domain/contact-form.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { SenderInformationPure } from '@/modules/sender-information/domain/sender-information.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CountryPureDomain')
@ObjectType()
export class CountryPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  sortName?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phoneCode?: number;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [AddressPure])
  addresses: AddressPure[];

  @Field(() => [BasicCarpetDesignerPure])
  basicCarpetDesigners: BasicCarpetDesignerPure[];

  @Field(() => [ContactFormPure])
  contactForms: ContactFormPure[];

  @Field(() => [InvoiceAddressPure])
  invoiceAddresses: InvoiceAddressPure[];

  @Field(() => [ReturnRequestAddressPure])
  returnRequestAddresses: ReturnRequestAddressPure[];

  @Field(() => [SenderInformationPure])
  senderInformations: SenderInformationPure[];

  @Field(() => [StatePure])
  states: StatePure[];
}
