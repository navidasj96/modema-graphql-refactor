import { CreateCitiesSepidarInput } from './create-cities-sepidar.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCitiesSepidarInput extends PartialType(CreateCitiesSepidarInput) {
  @Field(() => Int)
  id: number;
}
