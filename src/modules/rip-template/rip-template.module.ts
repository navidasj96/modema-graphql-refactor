import { Module } from '@nestjs/common';
import { RipTemplateService } from './rip-template.service';
import { RipTemplateResolver } from './rip-template.resolver';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { RipTemplate as RipTemplateGraphQL } from '@/modules/rip-template/domain/rip-template';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRfmReportInput } from '@/modules/rfm-report/dto/create-rfm-report.input';
import { PrintRipModule } from '@/modules/print-rip/print-rip.module';
import { UpdateRipTemplateProvider } from '@/modules/rip-template/providers/update-rip-template.provider';
import { RipTemplateItemModule } from '@/modules/rip-template-item/rip-template-item.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { CreateRipTemplateProvider } from '@/modules/rip-template/providers/create-rip-template.provider';

@Module({
  providers: [
    RipTemplateResolver,
    RipTemplateService,
    UpdateRipTemplateProvider,
    CreateRipTemplateProvider,
  ],
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
    PrintRipModule,
    RipTemplateItemModule,
    AuthModule,
  ],
  exports: [RipTemplateService],
})
export class RipTemplateModule {}
