import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpRfmReportService } from './tmp-rfm-report.service';
import { CreateTmpRfmReportInput } from './dto/create-tmp-rfm-report.input';
import { UpdateTmpRfmReportInput } from './dto/update-tmp-rfm-report.input';
import { TmpRfmReport } from '@/modules/tmp-rfm-report/domain/tmp-rfm-report';

@Resolver(() => TmpRfmReport)
export class TmpRfmReportResolver {
  constructor(private readonly tmpRfmReportService: TmpRfmReportService) {}

  @Mutation(() => TmpRfmReport)
  createTmpRfmReport(
    @Args('createTmpRfmReportInput')
    createTmpRfmReportInput: CreateTmpRfmReportInput,
  ) {
    return this.tmpRfmReportService.create(createTmpRfmReportInput);
  }

  @Query(() => [TmpRfmReport], { name: 'tmpRfmReport' })
  findAll() {
    return this.tmpRfmReportService.findAll();
  }

  @Query(() => TmpRfmReport, { name: 'tmpRfmReport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpRfmReportService.findOne(id);
  }

  @Mutation(() => TmpRfmReport)
  updateTmpRfmReport(
    @Args('updateTmpRfmReportInput')
    updateTmpRfmReportInput: UpdateTmpRfmReportInput,
  ) {
    return this.tmpRfmReportService.update(
      updateTmpRfmReportInput.id,
      updateTmpRfmReportInput,
    );
  }

  @Mutation(() => TmpRfmReport)
  removeTmpRfmReport(@Args('id', { type: () => Int }) id: number) {
    return this.tmpRfmReportService.remove(id);
  }
}
