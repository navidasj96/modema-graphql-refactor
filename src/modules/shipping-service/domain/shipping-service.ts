import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/domain/invoice-rates-result';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate';

@ObjectType()
export class ShippingService {
  @IDField(() => ID)
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

  @Field(() => [InvoiceRatesResult])
  invoiceRatesResults: InvoiceRatesResult[];

  @Field(() => [InvoiceShippingRate])
  invoiceShippingRates: InvoiceShippingRate[];
}
