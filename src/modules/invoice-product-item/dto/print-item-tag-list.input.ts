import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PrintItemTagListInput {
  @Field(() => String, { nullable: true })
  filterType: number;
}
