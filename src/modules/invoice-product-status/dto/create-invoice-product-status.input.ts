import { Field, InputType } from '@nestjs/graphql';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

@InputType()
export class CreateInvoiceProductStatusInput {
  @Field()
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

  @Field(() => [InvoiceProductItemInvoiceProductStatus])
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];
}
