import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VerifyUserPureDomain')
@ObjectType()
export class VerifyUserPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  user: UserPure;
}
