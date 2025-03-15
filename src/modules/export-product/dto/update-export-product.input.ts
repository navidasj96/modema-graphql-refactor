import { CreateExportProductInput } from './create-export-product.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExportProductInput extends PartialType(
  CreateExportProductInput,
) {
  @Field(() => Int)
  id: string;
}
