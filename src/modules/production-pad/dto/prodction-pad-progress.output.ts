import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionPadProgress {
  @Field(() => ProductionPad)
  productionPad: ProductionPad;

  @Field(() => [ProductionPadStatus])
  productionPadStatus: ProductionPadStatus[];
}
