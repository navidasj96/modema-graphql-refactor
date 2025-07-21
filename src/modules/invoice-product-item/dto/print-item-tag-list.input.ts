import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PrintItemTagListInput {
  @Field(() => Number, { nullable: true })
  filterType: number;
}
