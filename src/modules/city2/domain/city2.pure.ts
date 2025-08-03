import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('City2PureDomain')
@ObjectType()
export class City2Pure {
  @Field(() => ID)
  id?: number;

  @Field({ nullable: true })
  sepidarId?: number;
}
