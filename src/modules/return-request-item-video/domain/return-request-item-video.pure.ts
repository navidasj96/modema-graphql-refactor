import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { VideoPure } from '@/modules/video/domain/video.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestItemVideoPureDomain')
@ObjectType()
export class ReturnRequestItemVideoPure {
  @Field(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  videoId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ReturnRequestItemPure)
  returnRequestItem: ReturnRequestItemPure;

  @Field(() => VideoPure)
  video: VideoPure;
}
