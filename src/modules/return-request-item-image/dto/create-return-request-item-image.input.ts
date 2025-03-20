import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';

@InputType('CreateReturnRequestItemImageInput')
export class CreateReturnRequestItemImageInput {
  @Field()
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
