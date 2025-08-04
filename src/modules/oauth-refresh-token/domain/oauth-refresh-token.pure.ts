import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('OauthRefreshTokenPureDomain')
@ObjectType()
export class OauthRefreshTokenPure {
  @Field(() => ID)
  id: string;

  @Field()
  accessTokenId: string;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  expiresAt?: Date;
}
