import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class OauthAuthCode {
  @IDField(() => ID)
  id: string;

  @Field()
  userId: number;

  @Field()
  clientId: number;

  @Field({ nullable: true })
  scopes?: string;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  expiresAt?: Date;
}
