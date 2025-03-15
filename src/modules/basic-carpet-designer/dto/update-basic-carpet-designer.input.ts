import { CreateBasicCarpetDesignerInput } from './create-basic-carpet-designer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetDesignerInput extends PartialType(CreateBasicCarpetDesignerInput) {
  @Field(() => Int)
  id: number;
}
