import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductionRollInput {
  @Field(() => Boolean)
  isShaggy: boolean;

  @Field(() => String)
  search: string;

  @Field(() => Number)
  offset: number;

  @Field(() => Number)
  limit: number;
}
