import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateSelectedProductionPadsStatusInput {
  @Field(() => [Number])
  productionPadsIds: number[];

  @Field(() => Number)
  selectedStatusId: number;
}
