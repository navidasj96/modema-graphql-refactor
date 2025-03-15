import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePaymentMethodFieldInput {
  @Field()
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
