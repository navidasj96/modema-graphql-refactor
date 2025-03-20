import { Field, InputType } from '@nestjs/graphql';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';
import { Image } from '@/modules/image/domain/image';

@InputType('CreateImagesSizeGuidesDetailInput')
export class CreateImagesSizeGuidesDetailInput {
  @Field()
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
