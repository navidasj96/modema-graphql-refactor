import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType('CreateImpersonateHistoryInput')
export class CreateImpersonateHistoryInput {
  @Field()
  id: string;

  @Field()
  userId: number;

  @Field()
  impersonateUserId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User, { nullable: true })
  impersonateUser?: User;

  @Field(() => User, { nullable: true })
  user?: User;
}
