import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('OauthAccessTokenPureDomain')
@ObjectType()
export class OauthAccessTokenPure {
  @Field(() => ID)
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
