import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateCitiesSepidarInput')
export class CreateCitiesSepidarInput {
  @Field()
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
