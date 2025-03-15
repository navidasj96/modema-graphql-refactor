import { CreateMigrationInput } from './create-migration.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMigrationInput extends PartialType(CreateMigrationInput) {
  @Field(() => Int)
  id: number;
}
