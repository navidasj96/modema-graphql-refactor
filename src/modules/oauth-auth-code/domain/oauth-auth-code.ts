import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('OauthAuthCodeDomain')
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
