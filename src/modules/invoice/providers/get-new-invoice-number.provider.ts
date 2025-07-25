import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as moment from 'moment-jalaali';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetNewInvoiceNumberProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}

  async getNewInvoiceNumber(invoiceId = 0) {
    // شماره فاکتور کاربر باید از آخرین شماره فاکتور موجود در سیستم چند رقم بالاتر باشد، پس آخرین شماره فاکتور موجود در جدول انتخاب می شود(قسمت تاریخ از آن حذف می شود)

    const maxInvoice = (await this.invoiceRepository
      .createQueryBuilder('invoice')
      .select(
        'MAX(CAST(SUBSTRING(invoice.invoice_number, 10) AS UNSIGNED))',
        'invoice_number'
      )
      .where('invoice.id <> :invoiceId', { invoiceId })
      .getRawOne()) as { invoice_number: string };

    console.log('maxInvoice');

    let maxInvoiceNumber = 0;
    if (maxInvoice) {
      maxInvoiceNumber = parseInt(maxInvoice.invoice_number, 10);
    }
    // اگر شماره آخرین فاکتور وجود نداشت یعنی فاکتوری در جدول موجود نبوده پس شماره فاکتور عددی بین 1 تا 50 انتخاب می شود
    else {
      maxInvoiceNumber = Math.floor(Math.random() * 50) + 1;
    }
    const newInvoiceNumberNumericPart =
      maxInvoiceNumber + Math.floor(Math.random() * 4) + 2;

    // به شماره فاکتوری که با فرمول بالا به دست آمد تاریخ جاری اضافه می شود و همچنین با قرار دادن تعدادی صفر قبل از عدد، شماره آن به یک عدد 5 رقمی تبدیل میشود

    const nowJalali = moment().format('jYYYYjMMjDD') as string;
    const newInvoiceNumber = `${nowJalali}-${newInvoiceNumberNumericPart.toString().padStart(5, '0')}`;

    return newInvoiceNumber;
  }
}
