import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePaymentMethodInput {
  @Field()
  id: number;

  @Field()
  name: string;
}
