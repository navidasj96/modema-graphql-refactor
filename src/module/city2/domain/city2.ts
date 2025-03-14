import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class City2 {
  @IDField(() => ID)
  id?: number;

  @Field({ nullable: true })
  sepidarId?: number;
}
