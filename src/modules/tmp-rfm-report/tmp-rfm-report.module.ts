import { Module } from '@nestjs/common';
import { TmpRfmReportService } from './tmp-rfm-report.service';
import { TmpRfmReportResolver } from './tmp-rfm-report.resolver';
import { TmpRfmReport } from '@/modules/tmp-rfm-report/entities/tmp-rfm-report.entity';
import { TmpRfmReport as TmpRfmReportGraphQL } from '@/modules/tmp-rfm-report/domain/tmp-rfm-report';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpRfmReportInput } from '@/modules/tmp-rfm-report/dto/create-tmp-rfm-report.input';

@Module({
  providers: [TmpRfmReportResolver, TmpRfmReportService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpRfmReport])],
      resolvers: [
        {
          EntityClass: TmpRfmReport,
          DTOClass: TmpRfmReportGraphQL,
          CreateDTOClass: CreateTmpRfmReportInput,
        },
      ],
    }),
  ],
})
export class TmpRfmReportModule {}
