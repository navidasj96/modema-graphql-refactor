import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOauthAccessTokenInput {
  @Field()
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
