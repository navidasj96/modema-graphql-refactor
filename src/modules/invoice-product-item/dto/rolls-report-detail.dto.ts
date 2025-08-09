import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RollsReportDetailData {
  @Field(() => Number)
  rollWeight: number;

  @Field(() => Number)
  perMeterWeight: number;

  @Field(() => Number)
  totalDamagedWeight: number;

  @Field(() => Number)
  totalDamagedMeters: number;

  @Field(() => Number)
  totalCount: number;

  @Field(() => String)
  rollNumber: string;

  @Field(() => [RollsReportDetailItem])
  RollsReportDetailItems: RollsReportDetailItem[];
}

@ObjectType()
export class RollsReportDetailItem {
  @Field(() => String)
  sizeTitle: string;

  @Field(() => Number)
  producedCount: number;

  @Field(() => Number)
  producedArea: number;

  @Field(() => Number)
  producingCount: number;

  @Field(() => Number)
  producingArea: number;

  @Field(() => Number)
  brokenCount: number;

  @Field(() => Number)
  brokenArea: number;

  @Field(() => Number)
  producedFromBrokenCount: number;

  @Field(() => Number)
  producedFromBrokenArea: number;

  @Field(() => Number)
  totalArea: number;
}

export class RollsReportDetailItemTs {
  sizeTitle: string;

  producedCount: number;

  producedArea: number;

  producingCount: number;

  producingArea: number;

  brokenCount: number;

  brokenArea: number;

  producedFromBrokenCount: number;

  producedFromBrokenArea: number;

  totalArea: number;
}

export type RawProductItemDto = {
  count: number;
  id: number;
  sizeId: number;
  title: string;
  length: number;
  width: number;
  producedCount: number;
  stateId: number;
};
