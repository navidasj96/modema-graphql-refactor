import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChangeColorBasedOnProductOutput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  title: string;
}
