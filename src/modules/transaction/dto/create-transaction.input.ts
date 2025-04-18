import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTransactionInput')
export class CreateTransactionInput {
  @Field()
  userId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: number;

  @Field()
  amount: number;

  @Field()
  modemaBlocked: number;

  @Field()
  userBlocked: number;

  @Field()
  withdrawable: number;

  @Field()
  approved?: boolean;

  @Field({ nullable: true })
  approvedBy?: number;

  @Field({ nullable: true })
  description?: string;
}
