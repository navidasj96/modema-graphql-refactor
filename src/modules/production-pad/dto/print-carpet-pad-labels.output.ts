import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrintCarpetPadLabelsOutput {
  @Field(() => [ProductionPad])
  productionPads: ProductionPad[];

  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  status: boolean;
}

export class PrintCarpetPadLabelsOutputTs {
  startNo: number;

  endNo: number;

  count: number;

  sizeId: number;
}
