import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceProductItemsListOutput {
  @Field(() => [InvoiceProductItem])
  invoiceProductItems?: InvoiceProductItem[];

  @Field(() => Number)
  totalCount: number;
}
