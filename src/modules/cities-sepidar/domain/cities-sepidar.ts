import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CitiesSepidar {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  stateName?: string;

  @Field({ nullable: true })
  sepidarStateId?: number;

  @Field({ nullable: true })
  stateId?: number;

  @Field({ nullable: true })
  cityId?: number;
}
