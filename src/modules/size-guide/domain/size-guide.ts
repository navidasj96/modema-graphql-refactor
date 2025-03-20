import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';

@InputType('SizeGuideDomain')
@ObjectType()
export class SizeGuide {
  @IDField(() => ID)
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

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => [SizeGuidesDetail])
  sizeGuidesDetails: SizeGuidesDetail[];
}
