import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTmpUserInput {
  @Field({ nullable: true })
  userId?: string;
}
