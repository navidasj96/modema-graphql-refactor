import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SmsService } from '@/modules/sms/sms.service';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { SendInvoiceTrackingCodeNotificationJob } from '@/jobs/dtos/send-invoice-tracking-code-notification-job-input.dto';
import { JobsEnum } from '@/jobs/enum/jobsEnum';

@Processor(JobsEnum.Invoice_Tracking_Code_Notification)
@Injectable()
export class InvoiceTrackingCodeNotificationProcessor {
  constructor(
    private readonly smsService: SmsService,
    private readonly invoiceService: InvoiceService,
    private readonly configService: ConfigService
  ) {}

  @Process()
  async handle(job: Job<SendInvoiceTrackingCodeNotificationJob>) {
    const { invoiceId } = job.data;
    const invoice = await this.invoiceService.findOne({
      where: { id: invoiceId },
      relations: { user: true, invoiceAddresses: true, shippingService: true },
    });

    if (!invoice) {
      throw new Error(`Invoice with ID ${invoiceId} not found.`);
    }
    const user = invoice.user;
    const address = invoice.invoiceAddresses[0];

    let bodyId = this.configService.get(
      'general.FARAPAYAMAK_TEXT_CODE_SEND_TRACKING_CODE'
    );
    let trackingCode = invoice.trackingCode;
    const mahexNote = '(Tracking code will be sent by Mahex)';
    const shippingId = invoice.selectedShippingServiceId;

    if (shippingId == 2) {
      bodyId = this.configService.get(
        'general.FARAPAYAMAK_TEXT_CODE_SEND_MAHEX_TRACKING_CODE'
      );
      if (!trackingCode || trackingCode === '-') {
        trackingCode = mahexNote;
      }
    }

    if (!trackingCode) return;

    const customerName = address.fullname || user.name;
    const customerPhone =
      address.phone || (user.phoneVerified ? user.phone : null);
    if (!customerPhone) return;

    const contactNumber = this.configService.get(
      'general.FARAPAYAMAK_CONTACT_US_PHONE_NUMBER'
    );
    const waitDays = this.configService.get(
      'general.FARAPAYAMAK_DELAY_DAYS_TO_WAIT'
    );

    const text = `${customerName};${trackingCode} – package count: ${invoice.packageCount};${waitDays};${contactNumber}`;
    const to = customerPhone.replace(/^۰/, '0');

    await this.smsService.sendWithPattern({
      to,
      text,
      bodyId,
    });
  }
}
