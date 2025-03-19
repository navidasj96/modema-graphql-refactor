import { Field, InputType } from '@nestjs/graphql';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Product } from '@/modules/product/domain/product';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateReturnedInvoiceProductInput {
  @Field()
  id: number;

  @Field()
  returnedInvoiceId: number;

  @Field()
  invoiceProductId: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field()
  count: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoiceProduct)
  invoiceProduct: InvoiceProduct;

  @Field(() => Product)
  product: Product;

  @Field(() => ReturnedInvoice)
  returnedInvoice: ReturnedInvoice;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
