import { ImagePure } from '@/modules/image/domain/image.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestItemImagePureDomain')
@ObjectType()
export class ReturnRequestItemImagePure {
  @Field(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  imageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure)
  image: ImagePure;

  @Field(() => ReturnRequestItemPure)
  returnRequestItem: ReturnRequestItemPure;
}
