import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';
import { Field, ObjectType } from '@nestjs/graphql';
import { InvoiceHistoryWithTotalsDto } from '@/modules/invoice-history/dto/invoice-history-with-totals.dto';

@ObjectType()
export class UserTransactionListReturnDto {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => [WalletHistory])
  walletHistories: WalletHistory[];

  @Field(() => [InvoiceHistoryWithTotalsDto])
  InvoiceHistoryWithTotals: InvoiceHistoryWithTotalsDto[];
}
