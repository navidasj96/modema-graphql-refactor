import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

@InputType('InvoiceProductStatusDomain')
@FilterableUnPagedRelation(
  'invoiceProductItemInvoiceProductStatuses',
  () => InvoiceProductItemInvoiceProductStatus
)
@FilterableUnPagedRelation('invoiceProductItems', () => InvoiceProductItem)
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
  filterDepth: 4,
})
@ObjectType()
export class InvoiceProductStatus {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  status: string;

  @FilterableField({ nullable: true })
  step?: number;

  @FilterableField({ nullable: true })
  stepShaggy?: number;

  @Field()
  color: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [InvoiceProductItemInvoiceProductStatus])
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];
}
