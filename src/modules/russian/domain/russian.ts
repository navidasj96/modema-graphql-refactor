import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Russian {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  russianName?: string;

  @Field({ nullable: true })
  name?: string;
}
