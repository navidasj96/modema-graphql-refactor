import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SocialGoogleAccount {
  @IDField(() => ID)
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
}
