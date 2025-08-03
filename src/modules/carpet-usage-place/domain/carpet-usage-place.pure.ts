import { CarpetUsagePlaceInvoiceProductPure } from '@/modules/carpet-usage-place-invoice-product/domain/carpet-usage-place-invoice-product.pure';
import { CarpetUsagePlaceUserPure } from '@/modules/carpet-usage-place-user/domain/carpet-usage-place-user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('CarpetUsagePlacePureDomain')
@ObjectType()
export class CarpetUsagePlacePure {
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

  @Field(() => [CarpetUsagePlaceInvoiceProductPure])
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProductPure[];

  @Field(() => [CarpetUsagePlaceUserPure])
  carpetUsagePlaceUsers: CarpetUsagePlaceUserPure[];
}
