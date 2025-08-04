import { PreorderPreorderStatusPure } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status.pure';
import { PreorderStatusPure } from '@/modules/preorder-status/domain/preorder-status.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PreorderPureDomain')
@ObjectType()
export class PreorderPure {
  @Field(() => ID)
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

  @Field(() => [PreorderPreorderStatusPure])
  preorderPreorderStatuses: PreorderPreorderStatusPure[];

  @Field(() => UserPure, { nullable: true })
  assignedUser?: UserPure;

  @Field(() => PreorderStatusPure)
  preorderStatus: PreorderStatusPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;

  @Field(() => UserPure, { nullable: true })
  salesPerson?: UserPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
