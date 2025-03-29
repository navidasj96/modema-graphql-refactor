import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('OauthRefreshTokenDomain')
@ObjectType()
export class OauthRefreshToken {
  @IDField(() => ID)
  id: string;

  @Field()
  accessTokenId: string;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  expiresAt?: Date;
}
