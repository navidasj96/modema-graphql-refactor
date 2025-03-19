import { Field, InputType } from '@nestjs/graphql';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';

@InputType()
export class CreateProductionPadInput {
  @Field()
  id: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  productionPadStatusId: number;

  @Field()
  code: string;

  @Field()
  isUsed: boolean;

  @Field()
  isTagPrinted: boolean;

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

  @Field(() => [ProductionPadProductionPadStatus])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => ProductionPadStatus)
  productionPadStatus: ProductionPadStatus;
}
