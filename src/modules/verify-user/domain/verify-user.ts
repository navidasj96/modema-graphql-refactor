import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('VerifyUserDomain')
@ObjectType()
export class VerifyUser {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;
}
