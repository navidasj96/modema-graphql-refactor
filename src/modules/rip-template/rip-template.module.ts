import { Module } from '@nestjs/common';
import { RipTemplateService } from './rip-template.service';
import { RipTemplateResolver } from './rip-template.resolver';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { RipTemplate as RipTemplateGraphQL } from '@/modules/rip-template/domain/rip-template';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRfmReportInput } from '@/modules/rfm-report/dto/create-rfm-report.input';

@Module({
  providers: [RipTemplateResolver, RipTemplateService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RipTemplate])],
      resolvers: [
        {
          EntityClass: RipTemplate,
          DTOClass: RipTemplateGraphQL,
          CreateDTOClass: CreateRfmReportInput,
        },
      ],
    }),
  ],
})
export class RipTemplateModule {}
