import { CreateTagDetailInput } from './create-tag-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTagDetailInput extends PartialType(CreateTagDetailInput) {
  @Field(() => Int)
  id: number;
}
