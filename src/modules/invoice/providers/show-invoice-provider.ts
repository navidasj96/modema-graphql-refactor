import { Injectable } from '@nestjs/common';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { AuthService } from '@/modules/auth/auth.service';
import { checkUserHasPermission, pluck } from '@/utils/helpers';
import {
  CouponPermissions,
  DiscountPermissions,
  InvoicePermissions,
} from '@/utils/permissions';
import { SettingService } from '@/modules/setting/setting.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';
import {
  INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES,
  InvoiceStatusEnum,
  PRODUCTION_IN_PROGRESS_INVOICE_STATUSES,
} from '@/utils/invoice-status';
import { ShowInvoiceInputDto } from '@/modules/invoice/dto/show-invoice.input.dto';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { GraphQLError } from 'graphql';
import { InvoicePaymentStatusEnum } from '@/utils/invoice-payment-status';
import { InvoiceStatusService } from '@/modules/invoice-status/invoice-status.service';

@Injectable()
export class ShowInvoiceProvider {
  constructor(
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    /**
     * inject invoiceStatusService
     */
    private readonly invoiceStatusService: InvoiceStatusService
  ) {}

  async showInvoice(
    showInvoiceInputDto: ShowInvoiceInputDto,
    context: { req: UserContext }
  ) {
    const { invoiceId } = showInvoiceInputDto;
    const { req } = context;
    const { user } = req;
    const { sub: userId } = user;
    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );
    const { permissions, roles } = userPermissions;
    const hasPermissionToCoupon = checkUserHasPermission(permissions, [
      CouponPermissions.PERMISSION_TO_CHANGE,
    ]);
    const hasPermissionToDiscount = checkUserHasPermission(permissions, [
      DiscountPermissions.PERMISSION_TO_CHANGE,
    ]);

    const settings = await this.settingService.activeSetting();

    const invoice = await this.invoiceRepository.findOne({
      where: {
        id: invoiceId,
        currentInvoiceStatusId: MoreThanOrEqual(
          InvoiceStatusEnum.AWAITING_PROCESS
        ),
      },
      relations: {
        invoiceInvoiceStatuses: { invoiceStatus: true },
        invoiceProducts: {
          product: { subproducts: true },
          subproduct: true,
        },
        invoiceAddresses: { city: true, country: true, state: true },
        user: true,
        invoicePayments: true,
        invoicePaymentStatus: true,
        invoiceNegotiations: { negotiation: true },
      },
    });

    if (!invoice) {
      throw new GraphQLError(
        'Invoice not found or does not meet the required status criteria.'
      );
    }
    const invoiceCoupon = invoice?.coupon;
    let invoiceDiscountProducts: string[] = [];
    const invoiceProducts = invoice?.invoiceProducts || [];
    let subproductsDepotInProgress: Record<string, any> = {};
    for (const invoiceProduct of invoiceProducts) {
      if (invoiceProduct.discount) {
        invoiceDiscountProducts.push(invoiceProduct.discount);
      }
      const product = invoiceProduct.product;
      const subproduct = invoiceProduct.subproduct;
      subproductsDepotInProgress[subproduct.id] = 0;
      if (!product.isCarpetPad) {
        const sumDepotInvoicesInProduction = await this.invoiceRepository
          .createQueryBuilder('invoice')
          .leftJoin('invoice.invoiceProducts', 'invoiceProduct')
          .where('invoiceProduct.subproductId = :subproductId', {
            subproductId: subproduct.id,
          })
          .andWhere('invoice.invoiceModeId = :mode', {
            mode: InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT,
          })
          .andWhere('invoice.currentInvoiceStatusId IN (:...statuses)', {
            statuses: PRODUCTION_IN_PROGRESS_INVOICE_STATUSES,
          })
          .andWhere('invoice.id != :currentId', { currentId: invoice.id })
          .select('SUM(invoiceProduct.count)', 'sum')
          .getRawOne();
        if (sumDepotInvoicesInProduction > 0) {
          subproductsDepotInProgress[subproduct.id] =
            sumDepotInvoicesInProduction;
        }
      }
    }
    invoiceDiscountProducts = [...new Set(invoiceDiscountProducts)];
    let isAddressAndDetailsEditable = this.isAddressAndDetailsEditable(
      permissions,
      invoice
    );
    let isPaymentTypeEditable = this.isPaymentEditable(permissions, invoice);
    let isPackageCountEditable = this.isPackageCountEditable(
      permissions,
      invoice
    );
    let isDepotAndProduceCountsEditable = this.isDepotAndProduceCountsEditable(
      permissions,
      invoice
    );
    let isDeadlineDateEditable = this.isDeadlineDateEditable(
      permissions,
      invoice
    );
    let isMoneyTransferConfirmationEditable =
      this.isMoneyTransferConfirmationEditable(permissions, invoice);

    let isHeardAboutUsOptionEditable = this.isHeardAboutUsOptionEditable(
      permissions,
      invoice
    );
    let isMoneyTransferConfirmed = false;
    const invoicePaymentStatusId = invoice.invoicePaymentStatusId;

    if (
      invoicePaymentStatusId == InvoicePaymentStatusEnum.TRANSFER_MONEY &&
      !invoice.moneyTransferConfirmed
    ) {
      isAddressAndDetailsEditable = false;
      isPaymentTypeEditable = false;
      isDepotAndProduceCountsEditable = false;
      isMoneyTransferConfirmed = false;
    } else {
      isMoneyTransferConfirmed = true;
    }
    let isPaymentByCreditEditable = this.isPaymentByCreditEditable(
      permissions,
      invoice
    );

    const invoiceUserId = invoice.userId;
    const invoiceUser = invoice.user;
    const invoiceAddressId = invoice.addressId;
    const lock_states_array = await this.invoiceStatusService.findAll({
      select: ['id', 'status'],
    });

    let lock_states = pluck(lock_states_array, 'status', 'id');
    lock_states = { [-1]: '--', ...lock_states };
    const selected_lock_state = invoice.lockState ?? -1;
    const negotiations = invoice.invoiceNegotiations;
    const totalPaidForProducts = invoice.invoicePayments
      .filter(
        (invoicePayment) =>
          invoicePayment.forShipping == -1 &&
          invoicePayment.isConfirmed == 1 &&
          invoicePayment.amount > 0
      )
      .reduce((acc, payment) => acc + payment.amount, 0);
    if (invoice) {
      let statusCode = -100;
      if (invoice.shippingRateCod) {
        statusCode = Number(invoice.shippingRateCod);
      }
    }

    return invoice;
  }

  public isAddressAndDetailsEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_CHANGE_INVOICE_ADDRESS_AND_DETAILS,
      ])
    ) {
      return false;
    } else {
      return true;
    }
  }

  public isPaymentEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_CHANGE_INVOICE_DELIVERY_AND_PAYMENT_TYPE,
      ])
    ) {
      return false;
    } else {
      return true;
    }
  }

  public isDepotAndProduceCountsEditable(
    permissions: string[],
    invoice: Invoice
  ) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_CHANGE_INVOICE_DEPOT_AND_PRODUCE_COUNTS,
      ]) ||
      invoice.currentInvoiceStatusId >=
        InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT
    ) {
      return false;
    } else {
      return true;
    }
  }

  public isMoneyTransferConfirmationEditable(
    permissions: string[],
    invoice: Invoice
  ) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_CONFIRM_MONEY_TRANSFER,
      ])
    ) {
      return false;
    } else {
      return true;
    }
  }

  public isHeardAboutUsOptionEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_SET_INVOICE_HEARD_ABOUT_US_OPTIONS,
      ])
    ) {
      return false;
    } else if (
      invoice.currentInvoiceStatusId == InvoiceStatusEnum.AWAITING_PROCESS
    ) {
      return true;
    }
    return false;
  }

  public isPackageCountEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_SET_INVOICE_HEARD_ABOUT_US_OPTIONS,
      ])
    ) {
      return false;
    }
    if (
      [
        InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT,
        InvoiceStatusEnum.READY_TO_SEND_TIPAX,
        InvoiceStatusEnum.READY_TO_SEND_MAHEX,
        InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS,
      ].includes(invoice.currentInvoiceStatusId)
    ) {
      return true;
    }
    return false;
  }

  public isDeadlineDateEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_EDIT_INVOICE_DEADLINE_DATE,
      ])
    ) {
      return false;
    }
    return true;
  }

  public isPaymentByCreditEditable(permissions: string[], invoice: Invoice) {
    if (
      !checkUserHasPermission(permissions, [
        InvoicePermissions.PERMISSION_TO_CHANGE_PAYMENT_TO_CREDITABLE,
      ])
    ) {
      return false;
    } else if (
      INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES.includes(
        invoice.currentInvoiceStatusId
      )
    ) {
      return false;
    }
    return true;
  }
}
