import { ReadyInvoiceProductItem } from '@/modules/invoice-product/dto/ready-invoice-product-item';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadyInvoiceProductItemsListOutput {
  @Field(() => [ReadyInvoiceProductItem])
  itemInvoiceProducts: ReadyInvoiceProductItem[];

  // @Field(() => [ReadyInvoiceProductPadsOnlyDto])
  // invoicesContainsPadsOnly: ReadyInvoiceProductPadsOnlyDto[];

  @Field(() => Number)
  totalCount: number;
}
