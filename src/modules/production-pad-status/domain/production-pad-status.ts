import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';

@InputType('ProductionPadStatusDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@ObjectType()
export class ProductionPadStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  step: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductionPadProductionPadStatus])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @Field(() => [ProductionPad])
  productionPads: ProductionPad[];
}
