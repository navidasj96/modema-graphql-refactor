import { Module } from '@nestjs/common';
import { PrintRipService } from './print-rip.service';
import { PrintRipResolver } from './print-rip.resolver';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { PrintRip as PrintRipGraphQL } from '@/modules/print-rip/domain/print-rip';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePrintRipInput } from '@/modules/print-rip/dto/create-print-rip.input';

@Module({
  providers: [PrintRipResolver, PrintRipService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PrintRip])],
      resolvers: [
        {
          EntityClass: PrintRip,
          DTOClass: PrintRipGraphQL,
          CreateDTOClass: CreatePrintRipInput,
        },
      ],
    }),
  ],
})
export class PrintRipModule {}
