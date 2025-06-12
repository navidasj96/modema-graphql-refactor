import { CreateWonderfulOfferInput } from './create-wonderful-offer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWonderfulOfferInput extends PartialType(
  CreateWonderfulOfferInput
) {
  @Field(() => Int)
  id: number;
}
