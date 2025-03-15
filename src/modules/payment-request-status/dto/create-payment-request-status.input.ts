import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePaymentRequestStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
