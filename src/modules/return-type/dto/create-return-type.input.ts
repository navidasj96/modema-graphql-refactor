import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';

@InputType('CreateReturnTypeInput')
export class CreateReturnTypeInput {
  @Field()
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
