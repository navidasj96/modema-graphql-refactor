import { Module } from '@nestjs/common';
import { RfmReportService } from './rfm-report.service';
import { RfmReportResolver } from './rfm-report.resolver';
import { RfmReport } from '@/modules/rfm-report/entities/rfm-report.entity';
import { RfmReport as RfmReportGraphQL } from '@/modules/rfm-report/domain/rfm-report';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRfmReportInput } from '@/modules/rfm-report/dto/create-rfm-report.input';

@Module({
  providers: [RfmReportResolver, RfmReportService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RfmReport])],
      resolvers: [
        {
          EntityClass: RfmReport,
          DTOClass: RfmReportGraphQL,
          CreateDTOClass: CreateRfmReportInput,
        },
      ],
    }),
  ],
})
export class RfmReportModule {}
