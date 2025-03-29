import { Field, InputType } from '@nestjs/graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Video } from '@/modules/video/domain/video';

@InputType('CreateSubproductVideoInput')
export class CreateSubproductVideoInput {
  @Field()
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

  @Field(() => Subproduct)
  subproduct: Subproduct;

  @Field(() => Video)
  video: Video;
}
