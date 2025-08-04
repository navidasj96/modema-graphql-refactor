import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { ProductionPadProductionPadStatusPure } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status.pure';
import { ProductionPadPure } from '@/modules/production-pad/domain/production-pad.pure';

@InputType('ProductionPadStatusPureDomain')
@ObjectType()
export class ProductionPadStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  step: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductionPadProductionPadStatusPure])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatusPure[];

  @Field(() => [ProductionPadPure])
  productionPads: ProductionPadPure[];
}
