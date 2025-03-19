import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { Video } from '@/modules/video/domain/video';

@ObjectType()
export class ReturnRequestItemVideo {
  @IDField(() => ID)
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
