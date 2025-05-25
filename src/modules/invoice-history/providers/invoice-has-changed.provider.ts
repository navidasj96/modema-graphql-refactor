import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import {
  INVOICE_ADDRESS_COLUMNS,
  INVOICE_COLUMNS,
  INVOICE_PAYMENT_COLUMNS,
  INVOICE_PRODUCT_COLUMNS,
} from '@/utils/invoice-history';
import { only, onlyMany } from '@/utils/pick-types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceHasChangedProvider {
  constructor(
    /**
     * inject invoiceHistoryRepository
     */
    @InjectRepository(InvoiceHistory)
    private readonly invoiceHistoryRepository: Repository<InvoiceHistory>
  ) {}

  async invoiceHasChanged(invoice: Invoice, userId?: number) {
    let flagHasChanges = false;
    if (!userId) {
      userId = invoice.userId ?? undefined;
    }

    const invoiceAddress = invoice.invoiceAddresses[0];
    const invoiceProducts = invoice.invoiceProducts;
    const invoicePayments = invoice.invoicePayments;

    const lastInvoiceHistory = await this.invoiceHistoryRepository.findOne({
      where: { invoice: { id: invoice.id } },
      order: { createdAt: 'DESC' },
      relations: { invoiceProductHistories: true },
    });

    if (!lastInvoiceHistory) {
      return true;
    }

    const invoiceHistory = only(lastInvoiceHistory, INVOICE_COLUMNS);
    const invoiceAddressHistory = only(
      lastInvoiceHistory,
      INVOICE_ADDRESS_COLUMNS
    );

    const invoiceProductHistories = onlyMany(
      lastInvoiceHistory.invoiceProductHistories,
      INVOICE_PRODUCT_COLUMNS
    );

    const invoicePaymentHistories = onlyMany(
      lastInvoiceHistory.invoicePaymentHistories,
      INVOICE_PAYMENT_COLUMNS
    );

    if (userId != lastInvoiceHistory.editorUserId) {
      flagHasChanges = true;
    }
    // checking main invoice fields for changes
    if (!flagHasChanges) {
      for (const [key, value] of Object.entries(invoiceHistory)) {
        if (invoice[key] != value) {
          flagHasChanges = true;
          break;
        }
      }
    }

    // checking invoice address fields for changes
    if (!flagHasChanges) {
      for (const [key, value] of Object.entries(invoiceAddressHistory)) {
        if (invoiceAddress[key] != value) {
          flagHasChanges = true;
          break;
        }
      }
    }

    // checking invoice products fields for changes
    if (!flagHasChanges) {
      for (const invoiceProductHistory of invoiceProductHistories) {
        const invoiceProduct =
          invoiceProducts.find(
            (invoiceProductInner) =>
              invoiceProductInner.id == invoiceProductHistory.invoiceProductId
          ) || {};
        for (const [key, value] of Object.entries(invoiceProduct)) {
          if (invoiceProduct[key] != value) {
            flagHasChanges = true;
            break;
          }
        }
      }
    }

    // checking invoice payments fields for changes
    if (!flagHasChanges) {
      for (const invoicePaymentHistory of invoicePaymentHistories) {
        const invoicePayment =
          invoicePayments.find(
            (invoicePaymentInner) =>
              invoicePaymentInner.id == invoicePaymentHistory.invoicePaymentId
          ) || {};
        for (const [key, value] of Object.entries(invoicePayment)) {
          if (invoicePayment[key] != value) {
            flagHasChanges = true;
            break;
          }
        }
      }
    }

    return flagHasChanges;
  }
}
