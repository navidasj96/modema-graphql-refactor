import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Activity {
  @IDField(() => ID)
  id: string;

  @Field(() => Number, { nullable: true })
  userId?: number;

  @FilterableField()
  userName: string;

  @Field()
  contentId: number;

  @Field()
  contentType: string;

  @Field()
  action: string;

  @Field()
  description: string;

  @Field()
  details: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedUserId?: number;
}
