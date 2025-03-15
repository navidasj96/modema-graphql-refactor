import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoicePayment {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  invoicePaymentTypeId: number;

  @Field()
  amount: string;

  @Field()
  forShipping: boolean;

  @Field()
  userId: number;

  @Field({ nullable: true })
  refCode?: string;

  @Field({ nullable: true })
  chequeNumber?: string;

  @Field({ nullable: true })
  chequeBank?: string;

  @Field({ nullable: true })
  chequeDate?: string;

  @Field({ nullable: true })
  chequePayee?: string;

  @Field({ nullable: true })
  isConfirmed?: boolean;

  @Field({ nullable: true })
  refCodeSales?: string;

  @Field({ nullable: true })
  confirmedBy?: number;

  @Field({ nullable: true })
  paymentDate?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
