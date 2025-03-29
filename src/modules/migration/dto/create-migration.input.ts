import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateMigrationInput')
export class CreateMigrationInput {
  @Field()
  id: number;

  @Field()
  migration: string;

  @Field()
  batch: number;
}
