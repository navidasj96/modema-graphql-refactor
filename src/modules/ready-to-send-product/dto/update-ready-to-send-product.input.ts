import { CreateReadyToSendProductInput } from './create-ready-to-send-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReadyToSendProductInput extends PartialType(CreateReadyToSendProductInput) {
  @Field(() => Int)
  id: number;
}
