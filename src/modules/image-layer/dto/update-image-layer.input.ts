import { CreateImageLayerInput } from './create-image-layer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImageLayerInput extends PartialType(CreateImageLayerInput) {
  @Field(() => Int)
  id: number;
}
