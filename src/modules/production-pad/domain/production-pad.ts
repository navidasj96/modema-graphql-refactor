import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';

@InputType('ProductionPadDomain')
@ObjectType()
export class ProductionPad {
  @IDField(() => ID)
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

  @Field(() => [ProductionPadProductionPadStatus])
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => ProductionPadStatus)
  productionPadStatus: ProductionPadStatus;
}
