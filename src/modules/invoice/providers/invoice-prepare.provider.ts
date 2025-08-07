import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceAddressService } from '@/modules/invoice-address/invoice-address.service';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { InvoiceStatusService } from '@/modules/invoice-status/invoice-status.service';
import { InvoicePrepareInput } from '@/modules/invoice/dto/invoice-prepare.input.dto';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { ShippingServiceService } from '@/modules/shipping-service/shipping-service.service';
import { UserService } from '@/modules/user/user.service';
import { WalletService } from '@/modules/wallet/wallet.service';
import { InvoiceItemViewModel } from '@/view-models/general/invoice-item.viewModel';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicePrepareProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject walletService
     */
    private readonly walletService: WalletService,
    /**
     * inject userService
     */
    private readonly userService: UserService,
    /**
     * inject invoiceAddressService
     */
    private readonly invoiceAddressService: InvoiceAddressService,
    /**
     * inject invoiceStatusService
     */
    private readonly invoiceStatusService: InvoiceStatusService,
    /**
     * inject shippingServiceService
     */
    @Inject(forwardRef(() => ShippingServiceService))
    private readonly shippingService: ShippingServiceService
  ) {}

  async prepareInvoice(invoicePrepareInput: InvoicePrepareInput) {
    const { data, userId } = invoicePrepareInput;
    const setting = await this.settingService.activeSetting();
    const user = await this.userService.findOne({ where: { id: userId } });
    if (!user) {
      throw new GraphQLError('User not found');
    }
    const wallet = await this.walletService.findOne({
      where: { userId: user.id },
    });

    let walletNotUsableForLowPrice = false;
    let walletNotUsableForLowPriceText = '';
    let withdrawable = 0;
    let modema_blocked = 0;
    let user_blocked = 0;

    if (wallet) {
      withdrawable = wallet.withdrawable;
      modema_blocked = wallet.modemaBlocked;
      user_blocked = wallet.userBlocked;
    }
    let wallet_amount = withdrawable + user_blocked;
    let invoice = data.invoice;
    const invoiceStatuses = invoice.invoiceInvoiceStatuses;
    let currentInvoiceStatus = invoiceStatuses.find(
      (status) => status.invoiceStatusId === invoice.currentInvoiceStatusId
    )?.invoiceStatus;
    if (!currentInvoiceStatus) {
      throw new GraphQLError('Current invoice status not found');
    }
    const currentInvoiceStatusId = invoice.currentInvoiceStatusId;
    const invoiceStatusViewModel = new InvoiceStatus();
    const invoiceStatus =
      this.invoiceStatusService.invoiceStatusPrepare(currentInvoiceStatus);

    const address = invoice.invoiceAddresses[0];
    const invoiceAddressViewModel = new InvoiceAddress();
    const invoiceAddress =
      this.invoiceAddressService.invoiceAddressPrepare(address);

    let selectedShippingService: Record<string, any> = {};
    if (invoice.selectedShippingServiceId) {
      const selectedShipping = await this.shippingService.findOne({
        where: { id: invoice.selectedShippingServiceId },
      });
      if (selectedShipping) {
        selectedShippingService['id'] = selectedShipping.id;
        selectedShippingService['code'] = selectedShipping.code;
        selectedShippingService['is_active'] = selectedShipping.isActive;
        selectedShippingService['name'] = selectedShipping.name;
        selectedShippingService['description'] = selectedShipping.description;
        selectedShippingService['full_description'] =
          selectedShipping.fullDescription;
      }
    } else {
      selectedShippingService['id'] = 0;
      selectedShippingService['code'] = 'MODEMA';
      selectedShippingService['is_active'] = 1;
      selectedShippingService['name'] = 'ارسال رایگان با پست اختصاصی مدما';
      selectedShippingService['description'] =
        'تحویل رایگان با پست اختصاصی مدما طی چهار تا پنج روز کاری پس از آماده شدن سفارشات شما';
      selectedShippingService['full_description'] =
        'تحویل رایگان با پست اختصاصی مدما طی چهار تا پنج روز کاری پس از آماده شدن سفارشات شما';
    }

    const invoiceNumber = invoice.invoiceNumber;
    const taxRate = invoice.taxRate;
    const shippingRate = invoice.shippingRate;
    const name = invoice.name;
    const lastName = invoice.lastName;
    const email = invoice.user.email;
    const phone = invoice.user.phone;
    const issueDate = invoice.issueDate;
    const subtotalPrice = invoice.subtotalPrice;
    const totalDiscount = invoice.totalDiscount;
    const totalCouponDiscount = invoice.totalCouponDiscount;
    const totalTax = invoice.totalTax;
    const totalPrice = invoice.totalPrice;
    const cash_on_delivery = invoice.cashOnDelivery;
    const payment_error_message = invoice.paymentErrorMessage;

    const invoiceItemViewModel = new InvoiceItemViewModel();
    const invoiceItems = invoice.invoiceProducts.sort((a, b) => {
      // Sort by product.is_carpet_pad ASC
      if (a.product.isCarpetPad !== b.product.isCarpetPad) {
        return Number(a.product.isCarpetPad) - Number(b.product.isCarpetPad);
      }

      // Sort by subproduct.basicCarpetSize.sort_order ASC
      const aSort = a.subproduct.basicCarpetSize?.sortOrder ?? 0;
      const bSort = b.subproduct.basicCarpetSize?.sortOrder ?? 0;
      if (aSort !== bSort) {
        return aSort - bSort;
      }

      // Sort by subproduct.code ASC
      return (a.subproduct.code || '').localeCompare(b.subproduct.code || '');
    });
  }
}
