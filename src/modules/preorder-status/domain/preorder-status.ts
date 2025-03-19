import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';
import { Preorder } from '@/modules/preorder/domain/preorder';

@ObjectType()
export class PreorderStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [PreorderPreorderStatus])
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @Field(() => [Preorder])
  preorders: Preorder[];
}
