import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestReturnStatusPure } from '@/modules/return-request-return-status/domain/return-request-return-status.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnStatusPureDomain')
@ObjectType()
export class ReturnStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  stepTest?: number;

  @Field({ nullable: true })
  stepGuarantee?: number;

  @Field()
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnRequestHistoryPure])
  returnRequestHistories: ReturnRequestHistoryPure[];

  @Field(() => [ReturnRequestReturnStatusPure])
  returnRequestReturnStatuses: ReturnRequestReturnStatusPure[];

  @Field(() => [ReturnRequestPure])
  returnRequests: ReturnRequestPure[];
}
