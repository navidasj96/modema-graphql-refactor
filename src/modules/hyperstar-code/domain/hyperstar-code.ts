import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class HyperstarCode {
  @IDField(() => ID)
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
