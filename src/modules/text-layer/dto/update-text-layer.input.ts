import { Field, Int, PartialType } from '@nestjs/graphql';
import { CreateTextLayerInput } from '@/modules/text-layer/dto/create-text-layer.input';

export class UpdateTextLayerInput extends PartialType(CreateTextLayerInput) {
  @Field(() => Int)
  id: number;
}
