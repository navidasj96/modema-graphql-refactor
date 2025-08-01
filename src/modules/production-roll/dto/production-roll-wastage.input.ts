import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductionRollWastageInput {
  @Field(() => [Number])
  productionRollIds: number[];

  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  offset: number;
}
