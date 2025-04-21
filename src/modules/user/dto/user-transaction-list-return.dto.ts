import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';
import { Field, ObjectType } from '@nestjs/graphql';
import { InvoiceHistoryWithTotalsDto } from '@/modules/invoice-history/dto/invoice-history-with-totals.dto';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class UserTransactionListReturnDto {
  @Field()
  user: User;

  @Field(() => [WalletHistory])
  walletHistories: WalletHistory[];

  @Field(() => [InvoiceHistoryWithTotalsDto])
  InvoiceHistoryWithTotals: InvoiceHistoryWithTotalsDto[];
}
