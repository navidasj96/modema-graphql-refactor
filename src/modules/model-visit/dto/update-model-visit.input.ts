import { CreateModelVisitInput } from './create-model-visit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModelVisitInput extends PartialType(CreateModelVisitInput) {
  @Field(() => Int)
  id: number;
}
