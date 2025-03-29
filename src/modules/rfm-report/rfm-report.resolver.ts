import { Resolver } from '@nestjs/graphql';
import { RfmReportService } from './rfm-report.service';
import { RfmReport } from '@/modules/rfm-report/domain/rfm-report';

@Resolver(() => RfmReport)
export class RfmReportResolver {
  constructor(private readonly rfmReportService: RfmReportService) {}
}
