import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/domain/return-request-return-status';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';

@InputType('CreateReturnStatusInput')
export class CreateReturnStatusInput {
  @Field()
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

  @Field(() => [ReturnRequestHistory])
  returnRequestHistories: ReturnRequestHistory[];

  @Field(() => [ReturnRequestReturnStatus])
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @Field(() => [ReturnRequest])
  returnRequests: ReturnRequest[];
}
