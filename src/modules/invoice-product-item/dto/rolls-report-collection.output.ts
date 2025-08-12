import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RollsReportCollection {
  @Field(() => [[String]])
  customer: string[][];

  @Field(() => [[String]])
  depot: string[][];

  @Field(() => [[String]])
  depotDigikala: string[][];

  @Field(() => [[String]])
  defective: string[][];
}

@ObjectType()
export class RollsReportInvoiceModes {
  @Field(() => [Number])
  keys: number[];

  // This is a placeholder. You may want to define a more specific type for values if possible.
  // For now, GraphQL does not support Record types directly, so you may need to use a custom scalar or a list of key-value pairs.
}
