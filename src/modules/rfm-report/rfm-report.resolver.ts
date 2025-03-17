import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RfmReportService } from './rfm-report.service';
import { CreateRfmReportInput } from './dto/create-rfm-report.input';
import { UpdateRfmReportInput } from './dto/update-rfm-report.input';
import { RfmReport } from '@/modules/rfm-report/domain/rfm-report';

@Resolver(() => RfmReport)
export class RfmReportResolver {
  constructor(private readonly rfmReportService: RfmReportService) {}

  @Mutation(() => RfmReport)
  createRfmReport(
    @Args('createRfmReportInput') createRfmReportInput: CreateRfmReportInput,
  ) {
    return this.rfmReportService.create(createRfmReportInput);
  }

  @Query(() => [RfmReport], { name: 'rfmReport' })
  findAll() {
    return this.rfmReportService.findAll();
  }

  @Query(() => RfmReport, { name: 'rfmReport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rfmReportService.findOne(id);
  }

  @Mutation(() => RfmReport)
  updateRfmReport(
    @Args('updateRfmReportInput') updateRfmReportInput: UpdateRfmReportInput,
  ) {
    return this.rfmReportService.update(
      updateRfmReportInput.id,
      updateRfmReportInput,
    );
  }

  @Mutation(() => RfmReport)
  removeRfmReport(@Args('id', { type: () => Int }) id: number) {
    return this.rfmReportService.remove(id);
  }
}
