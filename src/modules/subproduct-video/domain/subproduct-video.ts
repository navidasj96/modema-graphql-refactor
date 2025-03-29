import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Video } from '@/modules/video/domain/video';

@InputType('SubproductVideoDomain')
@ObjectType()
export class SubproductVideo {
  @IDField(() => ID)
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
