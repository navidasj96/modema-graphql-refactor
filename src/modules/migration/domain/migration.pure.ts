import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('MigrationPureDomain')
@ObjectType()
export class MigrationPure {
  @Field(() => ID)
  id: number;

  @Field()
  migration: string;

  @Field()
  batch: number;
}
