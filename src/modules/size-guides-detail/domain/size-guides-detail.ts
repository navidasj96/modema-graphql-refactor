import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SizeGuidesDetail {
  @IDField(() => ID)
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
}
