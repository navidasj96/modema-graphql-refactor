import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
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
