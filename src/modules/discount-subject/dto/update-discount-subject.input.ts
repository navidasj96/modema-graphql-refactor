import { CreateDiscountSubjectInput } from './create-discount-subject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiscountSubjectInput extends PartialType(CreateDiscountSubjectInput) {
  @Field(() => Int)
  id: number;
}
