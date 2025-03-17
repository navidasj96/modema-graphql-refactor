import { CreateSpecialOfferInput } from './create-special-offer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpecialOfferInput extends PartialType(CreateSpecialOfferInput) {
  @Field(() => Int)
  id: number;
}
