import { InvoiceProduct as InvoiceProductDomain } from '@/modules/invoice-product/domain/invoice-product';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadyInvoiceProductItem extends InvoiceProductDomain {
  @Field(() => String)
  withPadText: string;

  @Field(() => Invoice)
  declare invoice: Invoice;

  @Field(() => Product)
  declare product: Product;

  @Field(() => Subproduct)
  declare subproduct: Subproduct;
}

//we have to define two separate interfaces for entity and domain
export interface ReadyInvoiceProductItemTs extends InvoiceProduct {
  withPadText: string;
}
