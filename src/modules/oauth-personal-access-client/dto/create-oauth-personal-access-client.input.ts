import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateOauthPersonalAccessClientInputs')
export class CreateOauthPersonalAccessClientInput {
  @Field()
  id: number;

  @Field()
  clientId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
