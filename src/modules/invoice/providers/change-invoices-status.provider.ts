import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemService } from '@/modules/invoice-product-item/invoice-product-item.service';
import { ChangeInvoicesStatusResponseDto } from '@/modules/invoice/dto/change-invoices-status-response.dto';
import { ChangeInvoicesStatusInput } from '@/modules/invoice/dto/change-invoices-status.input';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { permissionsToChangeInvoiceStatusEnum } from '@/modules/user/helpers/permission-to-change-invoice-status';
import { RolesNameEnum } from '@/utils/general-enums.enum';
import { checkUserHasRole } from '@/utils/helpers';
import {
  ALL_WHOLESALE_PAYMENT_STATUSES,
  InvoicePaymentStatusEnum,
} from '@/utils/invoice-payment-status';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import {
  InvoiceStatusEnum,
  READY_TO_SEND_INVOICE_STATUSES,
} from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, In } from 'typeorm';

@Injectable()
export class ChangeInvoiceStatusProvider {
  constructor(
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,

    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject invoiceProductItemService
     */
    private readonly invoiceProductItemService: InvoiceProductItemService
  ) {}

  public async updateInvoiceStatus(
    changeInvoicesStatusInput: ChangeInvoicesStatusInput,

    context: { req: UserContext }
  ): Promise<ChangeInvoicesStatusResponseDto> {
    const { ids, statusId } = changeInvoicesStatusInput;
    const { req } = context;

    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );

    const { permissions, roles } = userPermissions;

    //check for statues that user can change
    const statusesToChange = permissionsToChangeInvoiceStatusEnum(permissions);

    console.log('statusesToChange', statusesToChange);
    if (!statusesToChange.includes(statusId)) {
      return {
        message: `شما اجازه تغییر وضعیت به این صورتحساب را ندارید`,
        status: false,
      };
    }

    const invoiceIds = ids.map((id) => Number(id));
    const queryRunner = this.dataSource.createQueryRunner();

    //use typeorm queryRunner
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const invoiceRepository = manager.getRepository(Invoice);
    try {
      const invoices = await invoiceRepository.find({
        where: { id: In(invoiceIds) },
        relations: {
          invoiceAddresses: {
            state: true,
            city: true,
          },
          invoiceProducts: {
            product: true,
            subproduct: {
              basicCarpetSize: true,
            },
          },
          visitor: true,
        },
      });

      for (const invoice of invoices) {
        if (
          !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) &&
          statusId == InvoiceStatusEnum.CANCEL &&
          invoice.invoicePaymentStatusId !=
            InvoicePaymentStatusEnum.DIGIKALA_ORDERS
        ) {
          await queryRunner.rollbackTransaction();
          return {
            message:
              'کاربر گرامی شما اجازه کنسل کردن صورتحساب‌های غیر از دیجی کالا را ندارید',
            status: false,
          };
        }

        //change invoice status
        const changeResult = await this.changeInvoiceStatus(
          invoice,
          statusId,
          roles
        );

        if (changeResult.status == false) {
          await queryRunner.rollbackTransaction();
          return {
            message: changeResult.message,
            status: false,
          };
        }
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `:${error}مشکلی در عملیات بوجود امده است`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
    return {
      message: 'صورتحساب با موفقیت تغییر وضعیت داده شد',
      status: true,
    };
  }

  public async changeInvoiceStatus(
    invoice: Invoice,
    status: number,
    roles: string[]
  ): Promise<ChangeInvoicesStatusResponseDto> {
    const invoiceUser = invoice.user;
    const setting = await this.settingService.findAll();
    const invoiceProducts = invoice.invoiceProducts;
    const invoiceStatusId = invoice.currentInvoiceStatusId;

    if (invoiceStatusId == InvoiceStatusEnum.DELIVERED) {
      return {
        message: `
        صورتحساب
      ${invoice.invoiceNumber}
      تحویل مشتری شده و امکان تغییر وضعیت وجود ندارد.
      
      }

        `,
        status: false,
      };
    }

    if (
      invoiceStatusId == InvoiceStatusEnum.AWAITING_PROCESS &&
      status > invoiceStatusId &&
      status != InvoiceStatusEnum.CANCEL
    ) {
      if (!invoiceUser.heardAboutUsOption?.id) {
        return {
          message: `
                برای مشتری مربوط به صورتحساب
              ${invoice.invoiceNumber}
              نحوه آشنایی مشتری ثبت نشده است
              
              }
        
                `,
          status: false,
        };
      }
    }

    if (
      !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) &&
      invoiceStatusId > status &&
      !READY_TO_SEND_INVOICE_STATUSES.includes(status) &&
      !READY_TO_SEND_INVOICE_STATUSES.includes(invoiceStatusId)
    ) {
      return {
        message: `
                 امکان عقب بردن وضعیت وجود ندارد. لطفا جهت برگرداندن صورتحساب
                ${invoice.invoiceNumber}
               به مرحله قبل با بخش فنی تماس حاصل نمایید
                }
          
                  `,
        status: false,
      };
    }

    if (
      invoice.lockState &&
      invoice.lockState == invoice.currentInvoiceStatusId
    ) {
      return {
        message: 'تغییر وضعیت این سفارش قفل شده است.',
        status: false,
      };
    }

    if (invoice.needsReview) {
      return {
        message: `
                    سفارش شماره
                    ${invoice.invoiceNumber}
                   توسط مشتری دارای تغییرات است و تا زمان بررسی توسط کارشناس مربوطه امکان تغییر وضعیت آن وجود ندارد.
                    }
              
                      `,
        status: false,
      };
    }

    if (
      invoice.invoicePaymentStatusId ==
        InvoicePaymentStatusEnum.TRANSFER_MONEY &&
      !invoice.moneyTransferConfirmed
    ) {
      if (
        !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) ||
        invoiceStatusId != InvoiceStatusEnum.CANCEL
      ) {
        return {
          message:
            'وضعیت سفارشات کارت به کارت تا زمان تایید فیش واریزی مشتری توسط بخش فروش امکان پذیر نمی باشد. ',
          status: false,
        };
      }
    }

    if (invoiceStatusId == InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT) {
      const result =
        this.checkIfCreditableInvoiceAccountingDescriptionEntered(invoice);
    }

    return {
      message: 'صورتحساب با موفقیت تغییر وضعیت داده شد',
      status: true,
    };
  }

  public checkIfCreditableInvoiceAccountingDescriptionEntered(
    invoice: Invoice
  ) {
    if (
      invoice.invoicePaymentStatusId &&
      ALL_WHOLESALE_PAYMENT_STATUSES.includes(invoice.invoicePaymentStatusId)
    ) {
      if (
        !invoice.wholesaleRemainingMoneyTransferRefCode ||
        invoice.wholesaleRemainingMoneyTransferRefCode == ''
      ) {
        return {
          message:
            'برای تغییر وضعیت فروش های اعتباری عمده و ادامه روند تحویل کالا، بایستی تائیدیه و شماره پیگیری پرداخت مابقی صورتحساب، و توضیحات بخش مالی توسط مسئول این نوع از صورتحساب ها وارد گردد',
          status: false,
        };
      }
    }
    if (invoice.paymentCreditable) {
      if (
        !invoice.accountingDescription ||
        invoice.accountingDescription == ''
      ) {
        return {
          message:
            'برای تغییر وضعیت صورتحساب های اعتباری و ادامه روند تحویل کالا، بایستی تائیدیه و شماره پیگیری پرداخت مابقی صورتحساب، و توضیحات بخش مالی توسط مسئول این نوع از صورتحساب ها وارد گردد',
          status: false,
        };
      }
    }
    return {
      message: 'ok',
      status: true,
    };
  }

  public async changeInvoiceItemStatusesToExitedFromRepository(
    invoice: Invoice,
    manager?: EntityManager
  ) {
    const invoiceProducts = invoice.invoiceProducts;

    for (const invoiceProduct of invoiceProducts) {
      const invoiceProductItems = invoiceProduct.invoiceProductItems;

      for (const invoiceProductItem of invoiceProductItems) {
        await this.invoiceProductItemService.updateCurrentStatusId(
          invoiceProductItem,
          InvoiceProductStatusEnum.EXITED_FROM_REPOSITORY,
          manager
        );
      }
    }
  }
}
