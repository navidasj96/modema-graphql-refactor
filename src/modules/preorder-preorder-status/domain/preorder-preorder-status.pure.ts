import { PreorderStatusPure } from '@/modules/preorder-status/domain/preorder-status.pure';
import { PreorderPure } from '@/modules/preorder/domain/preorder.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PreorderPreorderStatusPureDomain')
@ObjectType()
export class PreorderPreorderStatusPure {
  @Field(() => ID)
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

  @Field(() => PreorderPure)
  preorder: PreorderPure;

  @Field(() => PreorderStatusPure)
  preorderStatus: PreorderStatusPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
