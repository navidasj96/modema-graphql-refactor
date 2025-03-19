import { Field, InputType } from '@nestjs/graphql';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ReturnReason } from '@/modules/return-reason/domain/return-reason';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateReturnedInvoiceInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  replacementInvoiceId?: number;

  @Field({ nullable: true })
  returnReasonId?: number;

  @Field({ nullable: true })
  returnDate?: Date;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  snappInformed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnedInvoiceProduct])
  returnedInvoiceProducts: ReturnedInvoiceProduct[];

  @Field(() => Invoice)
  invoice: Invoice;

  @Field(() => Invoice, { nullable: true })
  replacementInvoice?: Invoice;

  @Field(() => ReturnReason, { nullable: true })
  returnReason?: ReturnReason;

  @Field(() => User)
  user: User;
}
