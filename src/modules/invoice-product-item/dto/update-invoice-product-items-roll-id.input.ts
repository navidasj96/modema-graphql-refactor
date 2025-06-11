import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInvocieProductItemsRollIdInput {
  @Field(() => [Number])
  ids: number[];
  @Field(() => Number)
  productionRollId: number;
}
