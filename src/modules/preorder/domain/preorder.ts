import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';
import { User } from '@/modules/user/domain/user';
import { PreorderStatus } from '@/modules/preorder-status/domain/preorder-status';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class Preorder {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  preorderStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  customerDescription?: string;

  @Field({ nullable: true })
  companyDescription?: string;

  @Field({ nullable: true })
  phone2?: string;

  @Field({ nullable: true })
  trackingCode?: string;

  @Field({ nullable: true })
  activationCode?: string;

  @Field({ nullable: true })
  dateOfTurn?: string;

  @Field()
  activationSendTurn: number;

  @Field({ nullable: true })
  lastCallDate?: Date;

  @Field({ nullable: true })
  expirationDate?: Date;

  @Field()
  isActivated: boolean;

  @Field({ nullable: true })
  salesPersonId?: number;

  @Field({ nullable: true })
  assignedUserId?: number;

  @Field({ nullable: true })
  activationSendDate?: Date;

  @Field({ nullable: true })
  createdAtP?: string;

  @Field({ nullable: true })
  dateOfTurnP?: string;

  @Field({ nullable: true })
  activationSendDateP?: string;

  @Field({ nullable: true })
  lastCallDateP?: string;

  @Field({ nullable: true })
  expirationDateP?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => [PreorderPreorderStatus])
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @Field(() => User, { nullable: true })
  assignedUser?: User;

  @Field(() => PreorderStatus)
  preorderStatus: PreorderStatus;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => User, { nullable: true })
  salesPerson?: User;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => User, { nullable: true })
  user?: User;
}
