import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrintProfileInput {
  @Field()
  id: number;

  @Field()
  versionNo: string;

  @Field()
  versionChangeDate: Date;

  @Field({ nullable: true })
  inkCode?: string;

  @Field({ nullable: true })
  passCount?: string;

  @Field({ nullable: true })
  heatTemperature?: string;

  @Field({ nullable: true })
  heatSpeed?: string;

  @Field({ nullable: true })
  headHeight?: string;

  @Field({ nullable: true })
  fabricsTextureGrade?: string;

  @Field({ nullable: true })
  fabricsPerSquareMeterWeight?: string;

  @Field({ nullable: true })
  fabricsBackgroundColor?: string;

  @Field({ nullable: true })
  laminateGlueType?: string;

  @Field({ nullable: true })
  cyanCurve?: string;

  @Field({ nullable: true })
  cyanGain?: string;

  @Field({ nullable: true })
  magentaCurve?: string;

  @Field({ nullable: true })
  magentaGain?: string;

  @Field({ nullable: true })
  blackCurve?: string;

  @Field({ nullable: true })
  blackGain?: string;

  @Field({ nullable: true })
  yellowCurve?: string;

  @Field({ nullable: true })
  yellowGain?: string;

  @Field({ nullable: true })
  totalInkLimit?: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
