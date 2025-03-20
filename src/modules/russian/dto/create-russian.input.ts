import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateRussianInput')
export class CreateRussianInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  russianName?: string;

  @Field({ nullable: true })
  name?: string;
}
