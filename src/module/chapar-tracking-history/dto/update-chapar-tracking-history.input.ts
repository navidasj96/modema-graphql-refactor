import { CreateChaparTrackingHistoryInput } from './create-chapar-tracking-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChaparTrackingHistoryInput extends PartialType(CreateChaparTrackingHistoryInput) {
  @Field(() => Int)
  id: number;
}
