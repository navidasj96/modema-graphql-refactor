import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionPadListOutput {
  @Field(() => [ProductionPad])
  productionPads: ProductionPad[];

  @Field(() => Number)
  count: number;
}
