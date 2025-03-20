import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('MigrationDomain')
@ObjectType()
export class Migration {
  @IDField(() => ID)
  id: number;

  @Field()
  migration: string;

  @Field()
  batch: number;
}
