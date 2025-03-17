import { CreateVisitorGroupInput } from './create-visitor-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorGroupInput extends PartialType(CreateVisitorGroupInput) {
  @Field(() => Int)
  id: number;
}
