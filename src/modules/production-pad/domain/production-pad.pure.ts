import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { ProductionPadProductionPadStatusPure } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status.pure';
import { ProductionPadStatusPure } from '@/modules/production-pad-status/domain/production-pad-status.pure';

@InputType('ProductionPadPureDomain')
@ObjectType()
export class ProductionPadPure {
  @Field(() => ID)
  id: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  productionPadStatusId: number;

  @Field()
  code: string;

  @Field()
  isUsed: number;

  @Field()
  isTagPrinted: number;

  @Field({ nullable: true })
  rollRefCode?: string;

  @Field()
  rowNo: number;

  @Field({ nullable: true })
  requestDate?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Number, { nullable: true })
  productionPadRollId: number | null;

  @Field(() => [ProductionPadProductionPadStatusPure])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatusPure[];

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => ProductionPadStatusPure)
  productionPadStatus: ProductionPadStatusPure;
}
