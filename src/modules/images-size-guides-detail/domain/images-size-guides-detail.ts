import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';
import { Image } from '@/modules/image/domain/image';

@ObjectType()
export class ImagesSizeGuidesDetail {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  sizeGuidesDetailsId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => SizeGuidesDetail, { nullable: true })
  sizeGuidesDetails?: SizeGuidesDetail;
}
