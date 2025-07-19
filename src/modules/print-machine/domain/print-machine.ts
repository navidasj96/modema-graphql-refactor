import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';

@InputType('PrintMachineDomain')
@ObjectType()
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
export class PrintMachine {
  @IDField(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;
}
