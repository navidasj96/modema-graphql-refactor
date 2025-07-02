import { Field, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

export enum sortFieldName {
  NAME = 'name',
  INVOICE_NUMBER = 'invoiceNumber',
  PRODUCT_NAME = 'productName',
  CURRENT_STATUS = 'currentStatus',
  PREDICTED_DATE_FOR_RECEIVED_BY_REPOSITORY = 'predictedDateForReceivedByRepository',
  CODE = 'code',
  ROLL_REFERENCE_CODE = 'rollReferenceCode',
  PRINT_RIP = 'printRip',
  VERSION_NO = 'versionNo',
}

registerEnumType(sortFieldName, {
  name: 'InvoiceProductItemSortFieldName',
});

@InputType()
export class InvoiceProductItemsListSort {
  @Field(() => sortFieldName)
  field: sortFieldName;

  @Field(() => String)
  order: 'ASC' | 'DESC';
}

@InputType()
export class InvoiceProductItemsListInput {
  @Field(() => Boolean, { nullable: true })
  isShaggy?: boolean;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  rollReferenceCode?: string;

  @Field(() => Number, { nullable: true })
  offset: number;

  @Field(() => Number, { nullable: true })
  limit: number;

  @Field(() => Number, { nullable: true })
  status?: number;

  @Field(() => Boolean, { nullable: true })
  hideDepot?: boolean;

  @Field(() => InvoiceProductItemsListSort, { nullable: true })
  sort?: InvoiceProductItemsListSort;
}
