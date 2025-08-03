import { ImagePure } from '@/modules/image/domain/image.pure';
import { SizeGuidesDetailPure } from '@/modules/size-guides-detail/domain/size-guides-detail.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ImagesSizeGuidesDetailPureDomain')
@ObjectType()
export class ImagesSizeGuidesDetailPure {
  @Field(() => ID)
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

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => SizeGuidesDetailPure, { nullable: true })
  sizeGuidesDetails?: SizeGuidesDetailPure;
}
