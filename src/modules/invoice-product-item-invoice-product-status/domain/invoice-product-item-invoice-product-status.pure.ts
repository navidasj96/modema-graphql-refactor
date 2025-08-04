import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { InvoiceProductStatusPure } from '@/modules/invoice-product-status/domain/invoice-product-status.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductItemInvoiceProductStatusPureDomain')
@ObjectType()
export class InvoiceProductItemInvoiceProductStatusPure {
  @Field(() => ID)
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

  @Field(() => InvoiceProductItemPure, { nullable: true })
  invoiceProductItem?: InvoiceProductItemPure;

  @Field(() => InvoiceProductStatusPure, { nullable: true })
  invoiceProductStatus?: InvoiceProductStatusPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
