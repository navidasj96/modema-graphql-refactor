import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ActivityPure')
@ObjectType('ActivityPureDomain')
export class ActivityPure {
  @Field()
  id: number;

  @Field(() => Number, { nullable: true })
  userId?: number;

  @Field()
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
