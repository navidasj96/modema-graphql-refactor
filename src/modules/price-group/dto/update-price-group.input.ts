import { CreatePriceGroupInput } from './create-price-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePriceGroupInput extends PartialType(CreatePriceGroupInput) {
  @Field(() => Int)
  id: number;
}
