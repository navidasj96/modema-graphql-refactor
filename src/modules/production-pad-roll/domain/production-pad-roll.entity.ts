import { User } from '@/modules/user/domain/user';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';

@ObjectType()
@InputType('ProductionPadRollDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
export class ProductionPadRoll {
  @IDField(() => ID)
  id: number;

  @Field()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field(() => String, { nullable: true })
  billNumber: string | null;

  @Field(() => Date, { nullable: true })
  closeDate: Date | null;

  @FilterableField()
  isClosed: number;

  @Field(() => Number, { nullable: true })
  createdBy: number | null;

  @Field(() => Number, { nullable: true })
  closedBy: number | null;

  @FilterableField(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => User, { nullable: true })
  closedBy2: User;

  @Field(() => User, { nullable: true })
  createdBy2: User;
}
