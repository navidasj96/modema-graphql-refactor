import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { User } from '@/modules/user/domain/user';

@InputType('ProductionRollDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@ObjectType()
export class ProductionRoll {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field({ nullable: true })
  billNumber?: string;

  @Field({ nullable: true })
  closeDate?: Date;

  @FilterableField()
  isShaggy: number;

  @Field({ nullable: true })
  shaggyColor?: string;

  @FilterableField()
  isClosed: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  closedBy?: number;

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];

  @Field(() => User, { nullable: true })
  closedBy2?: User;

  @Field(() => User, { nullable: true })
  createdBy2?: User;
}
