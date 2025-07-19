import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceItemsPrintToHeatListOutput {
  @Field(() => [InvoiceProductItem])
  ripItems: InvoiceProductItem[];

  @Field(() => [InvoiceProductItem])
  heatItems: InvoiceProductItem[];
}
