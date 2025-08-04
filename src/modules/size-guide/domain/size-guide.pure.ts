import { ImagePure } from '@/modules/image/domain/image.pure';
import { SizeGuidesDetailPure } from '@/modules/size-guides-detail/domain/size-guides-detail.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SizeGuidePureDomain')
@ObjectType()
export class SizeGuidePure {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => [SizeGuidesDetailPure])
  sizeGuidesDetails: SizeGuidesDetailPure[];
}
