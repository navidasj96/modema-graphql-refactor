import { CreateTmpSpainOrderInput } from './create-tmp-spain-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpSpainOrderInput extends PartialType(
  CreateTmpSpainOrderInput
) {
  @Field(() => Int)
  id: number;
}
