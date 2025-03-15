import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Hyper {
  @IDField(() => ID)
  code: string;

  @Field({ nullable: true })
  depot?: number;

  @Field({ nullable: true })
  produce?: number;
}
