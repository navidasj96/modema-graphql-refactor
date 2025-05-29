import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { JobsEnum } from '@/modules/jobs/enum/jobsEnum';

@Module({
  imports: [
    BullModule.registerQueue({
      name: JobsEnum.Invoice_Tracking_Code_Notification,
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
