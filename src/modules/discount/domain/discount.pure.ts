import { DiscountSubjectPure } from '@/modules/discount-subject/domain/discount-subject.pure';
import { IncredibleOfferPure } from '@/modules/incredible-offer/domain/incredible-offer.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DiscountPureDomain')
@ObjectType()
export class DiscountPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field()
  type: number;

  @Field()
  discount: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field({ nullable: true })
  minProductPrice?: string;

  @Field({ nullable: true })
  maxDiscountPrice?: string;

  @Field({ defaultValue: false })
  withPad: boolean;

  @Field({ defaultValue: false })
  redisIsDeleted: boolean;

  @Field({ defaultValue: false })
  redisForShowoffIsDeleted: boolean;

  @Field({ nullable: true })
  showoffStartDate?: Date;

  @Field({ nullable: true })
  showoffEndDate?: Date;

  @Field({ defaultValue: false })
  hasStockCountOnly: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true, defaultValue: 1 })
  isActive?: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [DiscountSubjectPure])
  discountSubjects: DiscountSubjectPure[];

  @Field(() => UserPure)
  createdBy2: UserPure;

  @Field(() => UserPure)
  updatedBy2: UserPure;

  @Field(() => [IncredibleOfferPure])
  incredibleOffers: IncredibleOfferPure[];

  @Field(() => [InvoiceProductHistoryPure])
  invoiceProductHistories: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductPure])
  invoiceProducts: InvoiceProductPure[];
}
