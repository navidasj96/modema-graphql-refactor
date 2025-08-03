import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HyperstarCodePureDomain')
@ObjectType()
export class HyperstarCodePure {
  @Field(() => ID)
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
