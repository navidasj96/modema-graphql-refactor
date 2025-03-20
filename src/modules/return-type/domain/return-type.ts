import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';

@InputType('ReturnTypeDomain')
@ObjectType()
export class ReturnType {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnRequestHistory])
  returnRequestHistories: ReturnRequestHistory[];

  @Field(() => [ReturnRequest])
  returnRequests: ReturnRequest[];
}
