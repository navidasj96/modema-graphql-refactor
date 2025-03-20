import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateOauthRefreshTokenInput')
export class CreateOauthRefreshTokenInput {
  @Field()
  id: string;

  @Field()
  accessTokenId: string;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  expiresAt?: Date;
}
