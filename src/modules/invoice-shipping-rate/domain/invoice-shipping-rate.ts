import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@InputType('InvoiceShippingRateDomain')
@ObjectType()
export class InvoiceShippingRate {
  @IDField(() => ID)
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
