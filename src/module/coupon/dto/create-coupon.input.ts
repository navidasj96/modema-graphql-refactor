import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCouponInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  offType: number;

  @Field()
  discount: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  maxUsage: number;

  @Field({ nullable: true })
  minInvoicePrice?: string;

  @Field({ nullable: true })
  maxDiscountPrice?: string;

  @Field({ nullable: true })
  isApplicableToDiscountedProducts?: number;

  @Field()
  forOldCustomersOnly: boolean;

  @Field()
  forReadyProductsOnly: boolean;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  retargetingUserId?: number;

  @Field({ nullable: true })
  retargetingInvoiceId?: number;

  @Field({ nullable: true })
  maxPercent?: number;

  @Field()
  onlyForOutOfStocks: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  onlyForOneItem: boolean;

  @Field()
  forNewCustomersOnly: boolean;
}
