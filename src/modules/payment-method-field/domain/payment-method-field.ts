import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { PaymentMethod } from '@/modules/payment-method/domain/payment-method';

@ObjectType()
export class PaymentMethodField {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  paymentMethodId: number;

  @Field()
  paymentIdentifier: string;

  @Field()
  name: string;

  @Field()
  value: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoice)
  invoice: Invoice;

  @Field(() => PaymentMethod)
  paymentMethod: PaymentMethod;
}
