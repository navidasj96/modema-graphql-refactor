import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionRollListOutput {
  @Field(() => [ProductionRoll])
  productionRolls: ProductionRoll[];

  @Field(() => Number)
  count: number;
}
