import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOauthClientInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  secret?: string;

  @Field({ nullable: true })
  provider?: string;

  @Field()
  redirect: string;

  @Field()
  personalAccessClient: boolean;

  @Field()
  passwordClient: boolean;

  @Field()
  revoked: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
