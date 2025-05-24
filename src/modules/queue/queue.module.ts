import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { JobsEnum } from '@/jobs/enum/jobsEnum';

@Module({
  imports: [
    BullModule.registerQueue({
      name: JobsEnum.Invoice_Tracking_Code_Notification,
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
