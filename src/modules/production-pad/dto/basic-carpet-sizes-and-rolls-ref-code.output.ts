import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetSizesAndRollsRefCodeOutput {
  @Field(() => [BasicCarpetSize])
  basicCarpetSizes: BasicCarpetSize[];

  @Field(() => [ProductionPad])
  rollRefCodes: ProductionPad[];
}
