import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PrintProfilePureDomain')
@ObjectType()
export class PrintProfilePure {
  @Field(() => ID)
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
  isActive: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];

  @Field(() => UserPure, { nullable: true })
  createdBy2?: UserPure;

  @Field(() => UserPure, { nullable: true })
  updatedBy2?: UserPure;
}
