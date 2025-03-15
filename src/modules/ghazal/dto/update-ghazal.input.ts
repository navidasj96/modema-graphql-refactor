import { CreateGhazalInput } from './create-ghazal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGhazalInput extends PartialType(CreateGhazalInput) {
  @Field(() => Int)
  id: number;
}
