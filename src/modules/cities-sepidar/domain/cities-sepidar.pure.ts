import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CitiesSepidarPureDomain')
@ObjectType()
export class CitiesSepidarPure {
  @Field(() => ID)
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
