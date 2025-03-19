import { Field, ObjectType } from '@nestjs/graphql';
import { Preorder } from '@/modules/preorder/domain/preorder';
import { PreorderStatus } from '@/modules/preorder-status/domain/preorder-status';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class PreorderPreorderStatus {
  @Field()
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
