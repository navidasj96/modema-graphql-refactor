import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ShippingServicePure } from '@/modules/shipping-service/domain/shipping-service.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceShippingRatePureDomain')
@ObjectType()
export class InvoiceShippingRatePure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  shippingServiceId: number;

  @Field()
  shippingRate: string;

  @Field({ nullable: true })
  shippingRateCod?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => ShippingServicePure, { nullable: true })
  shippingService?: ShippingServicePure;
}
