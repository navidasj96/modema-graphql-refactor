import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType('CreateVerifyUserInput')
export class CreateVerifyUserInput {
  @Field()
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
