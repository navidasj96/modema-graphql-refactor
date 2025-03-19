import { Field, InputType } from '@nestjs/graphql';
import { Address } from '@/modules/address/domain/address';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@InputType()
export class CreateInvoiceRatesResultInput {
  @Field()
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

  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => ShippingService, { nullable: true })
  shippingService?: ShippingService;
}
