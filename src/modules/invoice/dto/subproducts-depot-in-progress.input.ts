import { Field, InputType } from '@nestjs/graphql';

@InputType('SubproductsDepotInProgressInput')
export class SubproductsDepotInProgressInput {
  @Field(() => Number)
  invoiceId: number;
}
