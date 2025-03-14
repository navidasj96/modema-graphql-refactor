import { CreateCarpetMaterialInput } from './create-carpet-material.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetMaterialInput extends PartialType(CreateCarpetMaterialInput) {
  @Field(() => Int)
  id: number;
}
