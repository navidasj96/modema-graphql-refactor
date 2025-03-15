import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Migration {
  @IDField(() => ID)
  id: number;

  @Field()
  migration: string;

  @Field()
  batch: number;
}
