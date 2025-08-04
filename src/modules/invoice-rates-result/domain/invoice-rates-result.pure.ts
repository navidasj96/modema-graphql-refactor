import { AddressPure } from '@/modules/address/domain/address.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ShippingServicePure } from '@/modules/shipping-service/domain/shipping-service.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceRatesResultPureDomain')
@ObjectType()
export class InvoiceRatesResultPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field({ nullable: true })
  shippingServiceId?: number;

  @Field({ nullable: true })
  ratesReplyResult?: string;

  @Field({ nullable: true })
  ratesReplyCodResult?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => AddressPure, { nullable: true })
  address?: AddressPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => ShippingServicePure, { nullable: true })
  shippingService?: ShippingServicePure;
}
