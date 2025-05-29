// jobs.module.ts
import { Module } from '@nestjs/common';
import { InvoiceTrackingCodeNotificationProcessor } from '@/modules/jobs/processors/send-invoice-tracking-code-notification.job';
import { SmsModule } from '@/modules/sms/sms.module';
import { InvoiceModule } from '@/modules/invoice/invoice.module';

@Module({
  imports: [SmsModule, InvoiceModule],
  providers: [InvoiceTrackingCodeNotificationProcessor],
  exports: [InvoiceTrackingCodeNotificationProcessor],
})
export class JobsModule {}
