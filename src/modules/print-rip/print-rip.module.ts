import { Module } from '@nestjs/common';
import { PrintRipService } from './print-rip.service';
import { PrintRipResolver } from './print-rip.resolver';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { PrintRip as PrintRipGraphQL } from '@/modules/print-rip/domain/print-rip';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePrintRipInput } from '@/modules/print-rip/dto/create-print-rip.input';
import { UpdatePrintRipProvider } from '@/modules/print-rip/providers/update-print-rip.provider';
import { AuthModule } from '@/modules/auth/auth.module';
import { CreatePrintRipProvider } from '@/modules/print-rip/providers/create-print-rip.provider';

@Module({
  providers: [
    PrintRipResolver,
    PrintRipService,
    UpdatePrintRipProvider,
    CreatePrintRipProvider,
  ],
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
    AuthModule,
  ],
  exports: [PrintRipService],
})
export class PrintRipModule {}
