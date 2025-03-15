import { CreateFavoriteProductInput } from './create-favorite-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFavoriteProductInput extends PartialType(CreateFavoriteProductInput) {
  @Field(() => Int)
  id: number;
}
