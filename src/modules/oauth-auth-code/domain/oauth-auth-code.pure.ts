import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('OauthAuthCodePureDomain')
@ObjectType()
export class OauthAuthCodePure {
  @Field(() => ID)
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
