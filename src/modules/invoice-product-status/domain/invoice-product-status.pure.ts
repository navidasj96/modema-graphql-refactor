import { InvoiceProductItemInvoiceProductStatusPure } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status.pure';
import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductStatusPureDomain')
@ObjectType()
export class InvoiceProductStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  step?: number;

  @Field({ nullable: true })
  stepShaggy?: number;

  @Field()
  color: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [InvoiceProductItemInvoiceProductStatusPure])
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatusPure[];

  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];
}
