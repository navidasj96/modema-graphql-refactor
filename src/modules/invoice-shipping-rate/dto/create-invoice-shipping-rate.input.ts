import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@InputType('CreateInvoiceShippingRateInput')
export class CreateInvoiceShippingRateInput {
  @Field()
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

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => ShippingService, { nullable: true })
  shippingService?: ShippingService;
}
