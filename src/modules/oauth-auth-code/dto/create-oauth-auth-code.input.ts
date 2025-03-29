import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateOauthAuthCodeInput')
export class CreateOauthAuthCodeInput {
  @Field()
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
