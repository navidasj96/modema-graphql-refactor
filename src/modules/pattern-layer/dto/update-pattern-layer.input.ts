import { CreatePatternLayerInput } from './create-pattern-layer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatternLayerInput extends PartialType(CreatePatternLayerInput) {
  @Field(() => Int)
  id: number;
}
