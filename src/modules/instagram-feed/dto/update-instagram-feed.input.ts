import { CreateInstagramFeedInput } from './create-instagram-feed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInstagramFeedInput extends PartialType(CreateInstagramFeedInput) {
  @Field(() => Int)
  id: number;
}
