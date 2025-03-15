import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('ActivityInput')
@ObjectType()
export class Activity {
  @IDField(() => ID)
  id: number;

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

  @Field(() => User)
  user: User;
}
