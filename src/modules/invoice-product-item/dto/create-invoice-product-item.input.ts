import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductItemInput {
  @Field()
  id: number;

  @Field()
  invoiceProductId: number;

  @Field()
  currentStatusId: number;

  @Field()
  row: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  padCode?: string;

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field({ nullable: true })
  productionRollId?: number;

  @Field({ nullable: true })
  predictedDateForReceivedByRepository?: string;

  @Field({ nullable: true })
  isTagPrinted?: boolean;

  @Field({ nullable: true })
  isPrintedAndHeated?: boolean;

  @Field({ nullable: true })
  fromDepot?: boolean;

  @Field()
  isReversed: boolean;

  @Field({ nullable: true })
  printProfileId?: number;

  @Field({ nullable: true })
  damageType?: number;

  @Field({ nullable: true })
  damageCause?: string;

  @Field({ nullable: true })
  damageReasonId?: number;

  @Field()
  isInsertedIntoSepidar: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  tempStatusId?: number;

  @Field({ nullable: true })
  printRipId?: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  tagSortOrder?: number;
}
