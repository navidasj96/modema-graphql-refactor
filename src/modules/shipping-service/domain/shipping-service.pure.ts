import { InvoiceRatesResultPure } from '@/modules/invoice-rates-result/domain/invoice-rates-result.pure';
import { InvoiceShippingRatePure } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ShippingServicePureDomain')
@ObjectType()
export class ShippingServicePure {
  @Field(() => ID)
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field()
  isActive: boolean;

  @Field(() => [InvoiceRatesResultPure])
  invoiceRatesResults: InvoiceRatesResultPure[];

  @Field(() => [InvoiceShippingRatePure])
  invoiceShippingRates: InvoiceShippingRatePure[];
}
