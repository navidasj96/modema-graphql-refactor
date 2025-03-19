import { Field, InputType } from '@nestjs/graphql';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail';
import { Image } from '@/modules/image/domain/image';
import { SizeGuide } from '@/modules/size-guide/domain/size-guide';

@InputType()
export class CreateSizeGuidesDetailInput {
  @Field()
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

  @Field(() => [ImagesSizeGuidesDetail])
  imagesSizeGuidesDetails: ImagesSizeGuidesDetail[];

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => SizeGuide)
  sizeGuide: SizeGuide;
}
