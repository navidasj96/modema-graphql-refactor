import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoicePaymentType } from '@/utils/invoice-payment-type';
import { WalletHistoryService } from '@/modules/wallet-history/wallet-history.service';
import { InvoiceHistoryService } from '@/modules/invoice-history/invoice-history.service';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';

@Injectable()
export class UserTransactionListProvider {
  constructor(
    /**
     * inject userRepository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * inject walletHistoryService
     */
    private readonly walletHistoryService: WalletHistoryService,
    /**
     * inject invoiceHistoryService
     */
    private readonly invoiceHistoryService: InvoiceHistoryService
  ) {}

  public async userTransactionList(userId: number) {
    //load basic user
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) throw new NotFoundException('User not found');

    //load wallet histories
    const walletHistories = await this.walletHistoryService.userWalletHistories(
      user.id
    );

    //  Load invoice histories and invoices
    const invoiceHistories: InvoiceHistory[] =
      await this.invoiceHistoryService.userInvoiceHistories(user.id);

    //filtered InvoiceHistory to achieve unique history according to invoice_id or total_price
    const uniqueInvoiceHistory: InvoiceHistory[] = [];
    let lastInvoiceHistory: null | InvoiceHistory = null;
    for (const invoiceHistory of invoiceHistories) {
      if (
        !lastInvoiceHistory ||
        invoiceHistory.invoiceId !== lastInvoiceHistory.invoiceId ||
        invoiceHistory.totalPrice !== lastInvoiceHistory.totalPrice
      ) {
        uniqueInvoiceHistory.push(invoiceHistory);
      }
      lastInvoiceHistory = invoiceHistory;
    }

    // calculate totalPaid , totalWalletDecreased , totalWalletIncreased
    const InvoiceHistoryWithTotals = uniqueInvoiceHistory.map(
      (invoiceHistoryItem) => {
        const payments = invoiceHistoryItem.invoicePaymentHistories ?? [];

        const totalPaid = payments
          .filter(
            (payment) =>
              payment.invoicePaymentTypeId !==
                InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
              payment.isConfirmed
          )
          .reduce((sum, p) => sum + Number(p.amount), 0);

        const totalWalletDecreased = payments
          .filter(
            (payment) =>
              payment.invoicePaymentTypeId ===
                InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
              !payment.forShipping &&
              payment.isConfirmed &&
              Number(payment.amount) > 0
          )
          .reduce((sum, payment) => sum + Number(payment.amount), 0);

        const totalWalletIncreased = payments
          .filter(
            (payment) =>
              payment.invoicePaymentTypeId ===
                InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
              !payment.forShipping &&
              payment.isConfirmed &&
              Number(payment.amount) < 0
          )
          .reduce((sum, payment) => sum + Number(payment.amount), 0);

        //add the computed values to each invoiceHistory instance
        return {
          invoiceHistory: invoiceHistoryItem,
          totalPaid: Math.max(totalPaid, 0),
          totalWalletDecreased,
          totalWalletIncreased,
        };
      }
    );

    return {
      user: user,
      walletHistories,
      InvoiceHistoryWithTotals,
    };
  }
}
