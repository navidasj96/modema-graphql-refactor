import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('ConfigDomain')
@ObjectType()
export class Config {
  @IDField(() => ID)
  id: number;

  @Field()
  key: string;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
