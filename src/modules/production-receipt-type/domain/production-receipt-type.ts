import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';

@InputType('ProductionReceiptTypeDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@ObjectType()
export class ProductionReceiptType {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
