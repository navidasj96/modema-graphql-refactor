import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateActivityInput {
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

  @Field(() => User)
  user: User;
}
