import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';
import { User } from '@/modules/user/domain/user';

@InputType('PrintRipDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@FilterableRelation('ripTemplate', () => RipTemplate)
@ObjectType()
export class PrintRip {
  @IDField(() => ID)
  id: number;

  @FilterableField({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @FilterableField()
  ripNumber: string;

  @Field()
  ripTemplateId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];

  @Field(() => RipTemplate)
  ripTemplate: RipTemplate;

  @Field(() => User, { nullable: true })
  user?: User;
}
