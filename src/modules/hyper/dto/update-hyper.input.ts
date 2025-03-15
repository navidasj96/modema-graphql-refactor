import { CreateHyperInput } from './create-hyper.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHyperInput extends PartialType(CreateHyperInput) {
  @Field(() => Int)
  id: number;
}
