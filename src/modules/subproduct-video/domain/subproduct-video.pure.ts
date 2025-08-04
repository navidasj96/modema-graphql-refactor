import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { VideoPure } from '@/modules/video/domain/video.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SubproductVideoPureDomain')
@ObjectType()
export class SubproductVideoPure {
  @Field(() => ID)
  id: number;

  @Field()
  videoId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;

  @Field(() => VideoPure)
  video: VideoPure;
}
