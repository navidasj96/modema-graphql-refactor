import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { CityIds } from '@/utils/City-ids';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { InvoicePaymentStatusEnum } from '@/utils/invoice-payment-status';
import { InvoicePaymentService } from '@/modules/invoice-payment/invoice-payment.service';

@Injectable()
export class CreateShipmentChaparProvider {
  constructor(
    /**
     * inject invoiceService
     */
    @Inject(forwardRef(() => InvoiceService))
    private readonly invoiceService: InvoiceService,
    /**
     * inject invoicePaymentService
     */
    private readonly invoicePaymentService: InvoicePaymentService
  ) {}

  async createShipmentChapar(invoice: Invoice) {
    let updatedInvoice = invoice;
    const invoiceAddress = invoice.invoiceAddresses;
    const packageCountResults =
      await this.invoiceService.fillInvoicePackageCountIfEmpty(invoice);
    let totalVolume = packageCountResults.totalVolume;
    let weight = packageCountResults.weight;
    let assignedPieces = packageCountResults.assignedPieces;
    if (!invoice.packageCount) {
      updatedInvoice.packageCount = assignedPieces;
    } else {
      assignedPieces = invoice.packageCount;
    }

    // شهرهای شیراز صدرا، گویم و اطراف شیراز با چاپار ارسال نمی شوند
    if (
      invoice.invoiceAddresses
        .map((address) => address.cityId)
        .some((cityId) => CityIds.SHIRAZ_AND_AROUND_CITY_IDS.includes(cityId))
    ) {
      return {
        status: false,
        message: `
                     آدرس صورتحساب 
                      ${invoice.invoiceNumber}
                     مربوط به شیراز و حومه می باشد و بایستی با سرویس  غیر از چاپار یا پست اختصاصی مدما ارسال گردند.
                      }
                        `,
      };
    }

    // در تاریخ 1399-05-08 به درخواست آقای محمودی و آقای کرمی و با توجه به مشکل پیش آمده برای یکی از صورتحساب ها دوباره اجازه ثبت مجدد چاپار داده نمی شود
    if (
      invoice.currentInvoiceStatusId == InvoiceStatusEnum.READY_TO_SEND_CHAPAR
    ) {
      return {
        status: false,
        message: `
                     صورتحساب
                      ${invoice.invoiceNumber}
قبلا به حالت آماده ارسال با چاپار انتقال داده شده و شماره بارنامه برای آن ثبت شده است  
                     }
                        `,
      };
    }

    // در تاریخ 1399-05-08 به درخواست آقای محمودی و آقای کرمی و با توجه به مشکل پیش آمده برای یکی از صورتحساب ها دوباره اجازه ثبت مجدد با ماهکس داده نمی شود

    if (
      invoice.currentInvoiceStatusId == InvoiceStatusEnum.READY_TO_SEND_MAHEX
    ) {
      return {
        status: false,
        message: `
                     صورتحساب
                      ${invoice.invoiceNumber}
قبلا به حالت آماده ارسال با ماهکس انتقال داده شده و شماره بارنامه برای آن ثبت شده است                      }
                        `,
      };
    }

    // به درخواست آقای کرمی در 1399-04-10 اجازه تغییر روش ارسال از چاپار به غیرچاپار و برعکس داده شد
    // در تاریخ 1399-05-08 به درخواست آقای محمودی و آقای کرمی و با توجه به مشکل پیش آمده برای یکی از صورتحساب ها دوباره اجازه ثبت مجدد چاپار داده نمی شود

    if (
      invoice.isChaparDelivery == 0 &&
      invoice.currentInvoiceStatusId >= InvoiceStatusEnum.SENT
    ) {
      return {
        status: false,
        message: `
         برای این فاکتور قبلا سرویس پستی غیرچاپار انتخاب شده و امکان تغییر وضعیت به سرویس چاپار وجود ندارد. جهت تغییر روش ارسال لطفا با بخش پشتیانی تماس حاصل نمایید.
      }
                        `,
      };
    }

    let paymentType = 0;
    let count = 0;
    let inv_value = 0;
    let service = '1';
    let value = (invoice.totalPrice || 0) * 10;

    if (
      invoice.invoicePaymentStatusId ==
      InvoicePaymentStatusEnum.CASH_ON_DELIVERY
    ) {
      const totalPaidForProducts =
        await this.invoicePaymentService.totalPaidForProducts(invoice.id);
      inv_value =
        ((invoice.totalPrice || 0) - (totalPaidForProducts || 0)) * 10;
    }

    if (invoice.freeDelivery > 0) {
      paymentType = 0;
    } else {
      paymentType = 1;
    }
  }
}
