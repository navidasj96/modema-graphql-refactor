import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';
import { SenderInformation } from '@/modules/sender-information/domain/sender-information';
import { State } from '@/modules/state/domain/state';

@ObjectType()
export class Country {
  @IDField(() => ID)
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

  @Field(() => [Address])
  addresses: Address[];

  @Field(() => [BasicCarpetDesigner])
  basicCarpetDesigners: BasicCarpetDesigner[];

  @Field(() => [ContactForm])
  contactForms: ContactForm[];

  @Field(() => [InvoiceAddress])
  invoiceAddresses: InvoiceAddress[];

  @Field(() => [ReturnRequestAddress])
  returnRequestAddresses: ReturnRequestAddress[];

  @Field(() => [SenderInformation])
  senderInformations: SenderInformation[];

  @Field(() => [State])
  states: State[];
}
