import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Preorder } from '@/modules/preorder/domain/preorder';
import { PreorderStatus } from '@/modules/preorder-status/domain/preorder-status';
import { User } from '@/modules/user/domain/user';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('PreorderPreorderStatusDomain')
@ObjectType()
export class PreorderPreorderStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  preorderId: number;

  @Field()
  preorderStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  companyDescription?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Preorder)
  preorder: Preorder;

  @Field(() => PreorderStatus)
  preorderStatus: PreorderStatus;

  @Field(() => User, { nullable: true })
  user?: User;
}
