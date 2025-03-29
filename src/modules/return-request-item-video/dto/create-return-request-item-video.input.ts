import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { Video } from '@/modules/video/domain/video';

@InputType('CreateReturnRequestItemVideoInput')
export class CreateReturnRequestItemVideoInput {
  @Field()
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  videoId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ReturnRequestItem)
  returnRequestItem: ReturnRequestItem;

  @Field(() => Video)
  video: Video;
}
