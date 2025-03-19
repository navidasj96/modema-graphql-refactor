import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class SubproductStockHistory {
  @IDField(() => ID)
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

  @Field(() => InvoiceProduct, { nullable: true })
  invoiceProduct?: InvoiceProduct;

  @Field(() => Subproduct)
  subproduct: Subproduct;

  @Field(() => User, { nullable: true })
  user?: User;
}
