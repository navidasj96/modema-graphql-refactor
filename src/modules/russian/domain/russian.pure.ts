import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RussianPureDomain')
@ObjectType()
export class RussianPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  russianName?: string;

  @Field({ nullable: true })
  name?: string;
}
