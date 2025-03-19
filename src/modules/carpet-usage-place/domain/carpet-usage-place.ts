import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CarpetUsagePlaceInvoiceProduct } from '@/modules/carpet-usage-place-invoice-product/domain/carpet-usage-place-invoice-product';
import { CarpetUsagePlaceUser } from '@/modules/carpet-usage-place-user/domain/carpet-usage-place-user';

@ObjectType()
export class CarpetUsagePlace {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CarpetUsagePlaceInvoiceProduct])
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @Field(() => [CarpetUsagePlaceUser])
  carpetUsagePlaceUsers: CarpetUsagePlaceUser[];
}
