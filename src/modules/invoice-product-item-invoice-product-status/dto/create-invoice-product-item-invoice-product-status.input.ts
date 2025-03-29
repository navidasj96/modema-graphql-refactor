import { Field, InputType } from '@nestjs/graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { User } from '@/modules/user/domain/user';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/domain/invoice-product-status';

@InputType('CreateInvoiceProductItemInvoiceProductStatusInput')
export class CreateInvoiceProductItemInvoiceProductStatusInput {
  @Field()
  id: number;

  @Field()
  invoiceProductItemId: number;

  @Field()
  invoiceProductStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => InvoiceProductItem, { nullable: true })
  invoiceProductItem?: InvoiceProductItem;

  @Field(() => InvoiceProductStatus, { nullable: true })
  invoiceProductStatus?: InvoiceProductStatus;

  @Field(() => User, { nullable: true })
  user?: User;
}
