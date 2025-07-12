import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceProductItemsRipToPrintListOutput {
  @Field(() => [InvoiceProductItem])
  ripItems: InvoiceProductItem[];

  @Field(() => [InvoiceProductItem])
  printAndHeatItems: InvoiceProductItem[];
}
