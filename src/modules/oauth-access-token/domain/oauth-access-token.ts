import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class OauthAccessToken {
  @IDField(() => ID)
  id: string;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  clientId: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  scopes?: string;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  expiresAt?: Date;
}
