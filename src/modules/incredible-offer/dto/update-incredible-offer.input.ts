import { CreateIncredibleOfferInput } from './create-incredible-offer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIncredibleOfferInput extends PartialType(CreateIncredibleOfferInput) {
  @Field(() => Int)
  id: number;
}
