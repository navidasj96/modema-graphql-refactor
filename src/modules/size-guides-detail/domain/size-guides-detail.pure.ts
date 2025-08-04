import { ImagePure } from '@/modules/image/domain/image.pure';
import { ImagesSizeGuidesDetailPure } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail.pure';
import { SizeGuidePure } from '@/modules/size-guide/domain/size-guide.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SizeGuidesDetailPureDomain')
@ObjectType()
export class SizeGuidesDetailPure {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  iconTitle: string;

  @Field()
  iconText: string;

  @Field()
  detailsTitle: string;

  @Field()
  detailsText: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  sizeGuideId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ImagesSizeGuidesDetailPure])
  imagesSizeGuidesDetails: ImagesSizeGuidesDetailPure[];

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => SizeGuidePure)
  sizeGuide: SizeGuidePure;
}
