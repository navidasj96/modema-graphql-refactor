import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { User } from '@/modules/user/domain/user';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrintRollTagsOutput {
  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];
}
