import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SubproductStockHistoryPureDomain')
@ObjectType()
export class SubproductStockHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  invoiceProductId?: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  oldValue: number;

  @Field()
  newValue: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
