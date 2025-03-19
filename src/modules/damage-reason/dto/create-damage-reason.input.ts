import { Field, InputType } from '@nestjs/graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

@InputType()
export class CreateDamageReasonInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  department: string;

  @Field()
  cause: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];
}
