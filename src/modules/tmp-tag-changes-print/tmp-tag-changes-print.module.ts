import { Module } from '@nestjs/common';
import { TmpTagChangesPrintService } from './tmp-tag-changes-print.service';
import { TmpTagChangesPrintResolver } from './tmp-tag-changes-print.resolver';
import { TmpTagChangesPrint } from '@/modules/tmp-tag-changes-print/entities/tmp-tag-changes-print.entity';
import { TmpTagChangesPrint as TmpTagChangesPrintGraphQL } from '@/modules/tmp-tag-changes-print/domain/tmp-tag-changes-print';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpTagChangesPrintInput } from '@/modules/tmp-tag-changes-print/dto/create-tmp-tag-changes-print.input';

@Module({
  providers: [TmpTagChangesPrintResolver, TmpTagChangesPrintService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpTagChangesPrint])],
      resolvers: [
        {
          EntityClass: TmpTagChangesPrint,
          DTOClass: TmpTagChangesPrintGraphQL,
          CreateDTOClass: CreateTmpTagChangesPrintInput,
        },
      ],
    }),
  ],
})
export class TmpTagChangesPrintModule {}
