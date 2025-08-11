import { ExitControlItemReportInput } from '@/modules/exit-control-item/dto/exit-control-item-report.input';
import { ExitControlItemReportProvider } from '@/modules/exit-control-item/providers/exit-control-item-report.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExitControlItemService {
  constructor(
    /**
     * inject exitControlReportProvider
     */
    private readonly exitControlItemReportProvider: ExitControlItemReportProvider
  ) {}

  async exitControlList(
    exitControlItemReportInput: ExitControlItemReportInput
  ) {
    return this.exitControlItemReportProvider.exitControlList(
      exitControlItemReportInput
    );
  }
}
