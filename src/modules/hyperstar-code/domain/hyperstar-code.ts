import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('HyperstarCodeDomain')
@ObjectType()
export class HyperstarCode {
  @IDField(() => ID)
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
