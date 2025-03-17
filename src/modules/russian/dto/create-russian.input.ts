import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRussianInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  russianName?: string;

  @Field({ nullable: true })
  name?: string;
}
