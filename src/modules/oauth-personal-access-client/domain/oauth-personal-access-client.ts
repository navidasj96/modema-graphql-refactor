import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('OauthPersonalAccessClientDomain')
@ObjectType()
export class OauthPersonalAccessClient {
  @IDField(() => ID)
  id: number;

  @Field()
  clientId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
