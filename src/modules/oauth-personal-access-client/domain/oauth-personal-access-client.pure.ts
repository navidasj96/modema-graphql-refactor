import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('OauthPersonalAccessClientPureDomain')
@ObjectType()
export class OauthPersonalAccessClientPure {
  @Field(() => ID)
  id: number;

  @Field()
  clientId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
