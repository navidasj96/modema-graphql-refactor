import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RollsReportListOutput {
  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];

  @Field(() => Number)
  totalCount: number;
}
