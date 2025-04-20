import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoicePaymentType } from '@/utils/invoice-payment-type';
import { WalletHistoryService } from '@/modules/wallet-history/wallet-history.service';
import { InvoiceHistoryService } from '@/modules/invoice-history/invoice-history.service';
import { InvoicePaymentHistoryService } from '@/modules/invoice-payment-history/invoice-payment-history.service';
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

    private readonly invoiceHistoryService: InvoiceHistoryService,
    /**
     * inject invoicePaymentHistoryService
     */
    private readonly invoicePaymentHistoryService: InvoicePaymentHistoryService,
  ) {}

  public async userTransactionList(userId: number) {
    // 1. Load basic user
    const user = await this.userRepository.findOne({
      where: { id: userId },
      select: ['id', 'name'],
    });

    if (!user) throw new NotFoundException('User not found');

    // 2. Load wallet histories
    const walletHistories =
      await this.walletHistoryService.walletForTransactionHistory(user.id);

    // 3. Load invoice histories and invoices
    const invoiceHistories: InvoiceHistory[] =
      await this.invoiceHistoryService.invoiceHistoryForTransactionHistory(
        user.id,
      );

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

    const InvoiceHistoryWithTotals = uniqueInvoiceHistory.map((ih) => {
      const payments = ih.invoicePaymentHistories ?? [];

      const totalPaid = payments
        .filter(
          (p) =>
            p.invoicePaymentTypeId !==
              InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
            p.isConfirmed,
        )
        .reduce((sum, p) => sum + Number(p.amount), 0);

      const totalWalletDecreased = payments
        .filter(
          (p) =>
            p.invoicePaymentTypeId ===
              InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
            !p.forShipping &&
            p.isConfirmed &&
            Number(p.amount) > 0,
        )
        .reduce((sum, p) => sum + Number(p.amount), 0);

      const totalWalletIncreased = payments
        .filter(
          (p) =>
            p.invoicePaymentTypeId ===
              InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET &&
            !p.forShipping &&
            p.isConfirmed &&
            Number(p.amount) < 0,
        )
        .reduce((sum, p) => sum + Number(p.amount), 0);

      // 🔧 Add the computed values to each invoiceHistory instance
      return {
        invoiceHistory: ih,
        totalPaid: Math.max(totalPaid, 0),
        totalWalletDecreased,
        totalWalletIncreased,
      };
    });

    return {
      id: user.id,
      name: user.name,
      walletHistories,
      InvoiceHistoryWithTotals,
    };
  }
}
