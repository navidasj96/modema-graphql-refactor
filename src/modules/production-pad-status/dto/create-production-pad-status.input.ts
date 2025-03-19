import { Field, InputType } from '@nestjs/graphql';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';

@InputType()
export class CreateProductionPadStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  step: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductionPadProductionPadStatus])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @Field(() => [ProductionPad])
  productionPads: ProductionPad[];
}
