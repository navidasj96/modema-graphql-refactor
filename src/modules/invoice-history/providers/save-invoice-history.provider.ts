import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { InvoiceHasChangedProvider } from '@/modules/invoice-history/providers/invoice-has-changed.provider';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';
import { InvoiceProductHistoryService } from '@/modules/invoice-product-history/invoice-product-history.service';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class SaveInvoiceHistoryProvider {
  constructor(
    /**
     * inject invoiceHistoryRepository
     */
    @InjectRepository(InvoiceHistory)
    private readonly invoiceHistoryRepository: Repository<InvoiceHistory>,

    /**
     * inject invoiceHasChangedProvider
     */
    private readonly invoiceHasChangedProvider: InvoiceHasChangedProvider,

    /**
     * inject invoiceProductHistory
     */
    private readonly invoiceProductHistoryService: InvoiceProductHistoryService
  ) {}
  async saveInvoiceHistory(
    invoice: Invoice,
    userId: number | null,
    manager?: EntityManager
  ) {
    const repository = manager
      ? manager.getRepository(InvoiceHistory)
      : this.invoiceHistoryRepository;

    let flagSave = true;

    if (!userId) {
      if (invoice.userId) {
        userId = invoice.userId;
      } else {
        throw new Error('User ID is required to save invoice history');
      }
    }

    const invoiceAddress = invoice.invoiceAddresses[0];
    const invoiceProducts = invoice.invoiceProducts;
    const invoicePayments = invoice.invoicePayments;
    // if (
    //   (await this.invoiceHasChangedProvider.invoiceHasChanged(
    //     invoice,
    //     userId
    //   )) == false
    // ) {
    //   return flagSave;
    // }

    const invoiceHistory = new InvoiceHistory();
    invoiceHistory.editorUserId = userId;
    invoiceHistory.invoiceId = invoice.id;
    invoiceHistory.currentInvoiceStatusId = invoice.currentInvoiceStatusId;
    invoiceHistory.userId = invoice.userId;
    invoiceHistory.addressId = invoice.addressId;
    invoiceHistory.couponId = invoice.couponId;
    invoiceHistory.invoiceNumber = invoice.invoiceNumber;
    invoiceHistory.refId = invoice.refId;
    invoiceHistory.saleRefId = invoice.saleRefId;
    invoiceHistory.orderId = invoice.orderId;
    invoiceHistory.taxRate = invoice.taxRate;
    invoiceHistory.selectedShippingServiceId =
      invoice.selectedShippingServiceId;
    invoiceHistory.shippingRate = invoice.shippingRate;
    invoiceHistory.shippingRateCod = invoice.shippingRateCod;
    invoiceHistory.name = invoice.name;
    invoiceHistory.lastName = invoice.lastName;
    invoiceHistory.issueDate = invoice.issueDate;
    invoiceHistory.visitorCouponId = invoice.visitorCouponId;
    invoiceHistory.visitorId = invoice.visitorId;
    invoiceHistory.visitorGroupId = invoice.visitorGroupId;
    invoiceHistory.visitorCouponRate = invoice.visitorCouponRate;
    invoiceHistory.visitorRate = invoice.visitorRate;
    invoiceHistory.partnerCode = invoice.partnerCode;
    invoiceHistory.totalVisitorShare = invoice.totalVisitorShare;
    invoiceHistory.subtotalPrice = invoice.subtotalPrice;
    invoiceHistory.totalDiscount = invoice.totalDiscount;
    invoiceHistory.totalCouponDiscount = invoice.totalCouponDiscount;
    invoiceHistory.totalTax = invoice.totalTax;
    invoiceHistory.totalPrice = invoice.totalPrice;
    invoiceHistory.cashOnDelivery = invoice.cashOnDelivery;
    invoiceHistory.paymentErrorMessage = invoice.paymentErrorMessage;
    invoiceHistory.invoicePaymentStatusId = invoice.invoicePaymentStatusId;
    invoiceHistory.freeDelivery = invoice.freeDelivery;
    invoiceHistory.trackingCode = invoice.trackingCode;
    invoiceHistory.deliveredDate = invoice.deliveredDate;
    invoiceHistory.moneyTransferRefCode = invoice.moneyTransferRefCode;
    invoiceHistory.packageCount = invoice.packageCount;
    invoiceHistory.visitorShareCalculated = invoice.visitorShareCalculated;
    invoiceHistory.isChaparDelivery = invoice.isChaparDelivery;
    invoiceHistory.chaparStatus = invoice.chaparStatus;
    invoiceHistory.chaparSettlementStatusId = invoice.chaparSettlementStatusId;
    invoiceHistory.crmPreOrderId = invoice.crmPreOrderId;
    invoiceHistory.crmCompanyId = invoice.crmCompanyId;
    invoiceHistory.crmCompanyPersonId = invoice.crmCompanyPersonId;
    invoiceHistory.description = invoice.description;

    invoiceHistory.isDepot = invoice.isDepot;
    invoiceHistory.replacementAdditionalPrice =
      invoice.replacementAdditionalPrice;
    invoiceHistory.replacementPaymentStatusId =
      invoice.replacementPaymentStatusId ?? null;
    invoiceHistory.replacementPriceMoneyTransferCode =
      invoice.replacementPriceMoneyTransferCode;
    invoiceHistory.digikalaSharePercent = invoice.digikalaSharePercent;
    invoiceHistory.digikalaShare = invoice.digikalaShare;

    invoiceHistory.description = invoice.description;
    invoiceHistory.wholesaleRemainingMoneyTransferRefCode =
      invoice.wholesaleRemainingMoneyTransferRefCode;
    invoiceHistory.parentInvoiceId = invoice.parentInvoiceId;
    invoiceHistory.lockState = invoice.lockState;
    invoiceHistory.moneyTransferConfirmed = invoice.moneyTransferConfirmed;
    invoiceHistory.moneyTransferConfirmedBy = invoice.moneyTransferConfirmedBy;
    invoiceHistory.isReversible = invoice.isReversible;
    invoiceHistory.totalWalletCharged = invoice.totalWalletCharged;
    invoiceHistory.useWallet = invoice.useWallet;
    invoiceHistory.needsReview = invoice.needsReview;
    invoiceHistory.invoiceTypeId = invoice.invoiceTypeId;
    invoiceHistory.invoiceModeId = invoice.invoiceModeId;
    invoiceHistory.paymentCreditable = invoice.paymentCreditable;
    invoiceHistory.isForAdvertisement = invoice.isForAdvertisement;
    invoiceHistory.additions = invoice.additions;

    invoiceHistory.invoiceAddressId = invoiceAddress.id;
    invoiceHistory.countryId = invoiceAddress.countryId;
    invoiceHistory.stateId = invoiceAddress.stateId;
    invoiceHistory.cityId = invoiceAddress.cityId;
    invoiceHistory.fullname = invoiceAddress.fullname;
    invoiceHistory.zipCode = invoiceAddress.zipCode;
    invoiceHistory.address = invoiceAddress.address;
    invoiceHistory.address2 = invoiceAddress.address2;
    invoiceHistory.phone = invoiceAddress.phone;
    invoiceHistory.phone2 = invoiceAddress.phone2;
    invoiceHistory.longitude = invoiceAddress.longitude;
    invoiceHistory.latitude = invoiceAddress.latitude;
    invoiceHistory.email = invoiceAddress.email;
    invoiceHistory.fullAddress = invoiceAddress.fullAddress;

    const saveInvoiceHistory = await repository.save(invoiceHistory);
    if (!saveInvoiceHistory) {
      return false;
    }

    for (const invoiceProduct of invoiceProducts) {
      if (flagSave) {
        const invoiceProductHistory = new InvoiceProductHistory();
        invoiceProductHistory.invoiceId = invoice.id;
        invoiceProductHistory.invoiceHistoryId = invoiceHistory.id;
        invoiceProductHistory.invoiceProductId = invoiceProduct.id;
        invoiceProductHistory.productId = invoiceProduct.productId;
        invoiceProductHistory.subproductId = invoiceProduct.subproductId;
        invoiceProductHistory.designId = invoiceProduct.designId;
        invoiceProductHistory.discountId = invoiceProduct.discountId;
        invoiceProductHistory.width = invoiceProduct.width;
        invoiceProductHistory.length = invoiceProduct.length;
        invoiceProductHistory.pricePerInch = invoiceProduct.pricePerInch;
        invoiceProductHistory.price = invoiceProduct.price;
        invoiceProductHistory.discount = invoiceProduct.discount;
        invoiceProductHistory.count = invoiceProduct.count;
        invoiceProductHistory.totalPrice = invoiceProduct.totalPrice;
        invoiceProductHistory.totalDiscount = invoiceProduct.totalDiscount;
        invoiceProductHistory.isCouponApplicable =
          invoiceProduct.isCouponApplicable;
        invoiceProductHistory.totalCouponDiscount =
          invoiceProduct.totalCouponDiscount;
        invoiceProductHistory.designerPricePercentage =
          invoiceProduct.designerPricePercentage;
        invoiceProductHistory.designerPriceShare =
          invoiceProduct.designerPriceShare;
        invoiceProductHistory.withPad = invoiceProduct.withPad;
        invoiceProductHistory.padId = invoiceProduct.padId;
        invoiceProductHistory.relatedProductId =
          invoiceProduct.relatedProductId;
        invoiceProductHistory.relatedSubproductId =
          invoiceProduct.relatedSubproductId;
        invoiceProductHistory.invoiceProductItemsCreated =
          invoiceProduct.invoiceProductItemsCreated;
        invoiceProductHistory.itemsToProduce = invoiceProduct.itemsToProduce;
        invoiceProductHistory.itemsFromDepot = invoiceProduct.itemsFromDepot;
        invoiceProductHistory.stockCount = invoiceProduct.stockCount;
        invoiceProductHistory.description = invoiceProduct.description;

        const invoiceProductHistorySave =
          await this.invoiceProductHistoryService.save(
            invoiceProductHistory,
            manager
          );
        if (!invoiceProductHistorySave) {
          flagSave = false;
        }
      }
    }

    for (const invoicePayment of invoicePayments) {
      if (flagSave) {
        const invoicePaymentHistory = new InvoicePaymentHistory();
        invoicePaymentHistory.invoicePaymentId = invoicePayment.id;
        invoicePaymentHistory.invoiceId = invoicePayment.invoiceId;
        invoicePaymentHistory.invoiceHistoryId = invoiceHistory.id;
        invoicePaymentHistory.invoicePaymentTypeId =
          invoicePayment.invoicePaymentTypeId;
        invoicePaymentHistory.amount = invoicePayment.amount;
        invoicePaymentHistory.userId = invoicePayment.userId;
        invoicePaymentHistory.refCode = invoicePayment.refCode;
        invoicePaymentHistory.chequeNumber = invoicePayment.chequeNumber;
        invoicePaymentHistory.chequeBank = invoicePayment.chequeBank;
        invoicePaymentHistory.chequeDate = invoicePayment.chequeDate;
        invoicePaymentHistory.chequePayee = invoicePayment.chequePayee || '';
        invoicePaymentHistory.refCodeSales = invoicePayment.refCodeSales;
        invoicePaymentHistory.isConfirmed = invoicePayment.isConfirmed;
        invoicePaymentHistory.confirmedBy = invoicePayment.confirmedBy;
        invoicePaymentHistory.description = invoicePayment.description;
        invoicePaymentHistory.forShipping = invoicePayment.forShipping;
        invoicePaymentHistory.paymentDate = invoicePayment.paymentDate;
        invoicePaymentHistory.description = invoicePayment.description;
        const invoicePaymentHistorySave = await repository.save(
          invoicePaymentHistory
        );
        console.log('invoicePaymentHistorySave', invoicePaymentHistorySave);

        if (!invoicePaymentHistorySave) {
          flagSave = false;
        }
      }
    }
    return flagSave;
  }
}
