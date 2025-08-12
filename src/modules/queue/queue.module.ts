import { JobsEnum } from '@/modules/jobs/enum/jobsEnum';
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.registerQueue({
      name: JobsEnum.Invoice_Tracking_Code_Notification,
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
