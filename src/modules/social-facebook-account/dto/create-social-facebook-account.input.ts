import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateSocialFacebookAccountInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  providerUserId: string;

  @Field()
  provider: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;
}
