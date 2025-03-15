import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
