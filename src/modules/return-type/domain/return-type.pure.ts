import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnTypePureDomain')
@ObjectType()
export class ReturnTypePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnRequestHistoryPure])
  returnRequestHistories: ReturnRequestHistoryPure[];

  @Field(() => [ReturnRequestPure])
  returnRequests: ReturnRequestPure[];
}
