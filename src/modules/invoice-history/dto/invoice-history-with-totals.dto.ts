import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InvoiceHistoryWithTotalsDto {
  @Field(() => InvoiceHistory)
  invoiceHistory: InvoiceHistory;

  @Field()
  totalPaid: number;

  @Field()
  totalWalletDecreased: number;

  @Field()
  totalWalletIncreased: number;
}
