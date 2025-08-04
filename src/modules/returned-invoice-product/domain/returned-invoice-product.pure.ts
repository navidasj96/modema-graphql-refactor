import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { ReturnedInvoicePure } from '@/modules/returned-invoice/domain/returned-invoice.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnedInvoiceProductPureDomain')
@ObjectType()
export class ReturnedInvoiceProductPure {
  @Field(() => ID)
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

  @Field(() => InvoiceProductPure)
  invoiceProduct: InvoiceProductPure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => ReturnedInvoicePure)
  returnedInvoice: ReturnedInvoicePure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
