import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class PaymentMethod {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;
}
