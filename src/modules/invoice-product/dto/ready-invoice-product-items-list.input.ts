import { Field, InputType, registerEnumType } from '@nestjs/graphql';

// export enum sortFieldName {
//   NAME = 'name',
//   INVOICE_NUMBER = 'invoiceNumber',
//   PRODUCT_NAME = 'productName',
//   CURRENT_STATUS = 'currentStatus',
//   PREDICTED_DATE_FOR_RECEIVED_BY_REPOSITORY = 'predictedDateForReceivedByRepository',
//   CODE = 'code',
//   ROLL_REFERENCE_CODE = 'rollReferenceCode',
//   PRINT_RIP = 'printRip',
//   VERSION_NO = 'versionNo',
// }

// registerEnumType(sortFieldName, {
//   name: 'ReadyInvoiceProductItemsListInputSortFieldName',
// });

// @InputType()
// export class ReadyInvoiceProductItemsListInputSort {
//   @Field(() => sortFieldName)
//   field: sortFieldName;

//   @Field(() => String)
//   order: 'ASC' | 'DESC';
// }

@InputType()
export class ReadyInvoiceProductItemsListInput {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  fromDate: string | null;

  @Field(() => String, { nullable: true })
  toDate: string | null;

  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  offset: number;
}
