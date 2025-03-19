import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';

@ObjectType()
export class ReturnRequestItemImage {
  @IDField(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  imageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Image)
  image: Image;

  @Field(() => ReturnRequestItem)
  returnRequestItem: ReturnRequestItem;
}
