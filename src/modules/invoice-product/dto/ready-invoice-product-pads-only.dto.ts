import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadyInvoiceProductPadsOnlyDto extends Invoice {
  @Field(() => String)
  withPadText: string;

  @Field(() => [InvoiceProduct], { nullable: true })
  declare invoiceProducts?: InvoiceProduct[];
}
