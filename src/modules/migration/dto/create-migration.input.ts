import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMigrationInput {
  @Field()
  id: number;

  @Field()
  migration: string;

  @Field()
  batch: number;
}
