import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCity2Input {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  sepidarId?: number;
}
