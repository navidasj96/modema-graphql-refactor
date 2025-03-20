import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('City2Domain')
@ObjectType()
export class City2 {
  @IDField(() => ID)
  id?: number;

  @Field({ nullable: true })
  sepidarId?: number;
}
