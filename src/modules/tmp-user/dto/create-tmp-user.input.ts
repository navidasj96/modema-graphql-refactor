import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTmpUserInput')
export class CreateTmpUserInput {
  @Field({ nullable: true })
  userId?: string;
}
