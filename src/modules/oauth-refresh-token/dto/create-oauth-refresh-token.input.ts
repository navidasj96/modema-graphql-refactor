import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
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
