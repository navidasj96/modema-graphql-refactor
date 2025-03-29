import { Resolver } from '@nestjs/graphql';
import { TmpRfmReportService } from './tmp-rfm-report.service';
import { TmpRfmReport } from '@/modules/tmp-rfm-report/domain/tmp-rfm-report';

@Resolver(() => TmpRfmReport)
export class TmpRfmReportResolver {
  constructor(private readonly tmpRfmReportService: TmpRfmReportService) {}
}
