import { Module } from '@nestjs/common';
import { PrintMachineService } from './print-machine.service';
import { PrintMachineResolver } from './print-machine.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { PrintMachine } from '@/modules/print-machine/entities/print-machine.entity';
import { PrintMachine as PrintMachineGraphQL } from '@/modules/print-machine/domain/print-machine';
import { CreatePrintMachineInput } from '@/modules/print-machine/dto/create-print-machine.input';

@Module({
  providers: [PrintMachineResolver, PrintMachineService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PrintMachine])],
      resolvers: [
        {
          EntityClass: PrintMachine,
          DTOClass: PrintMachineGraphQL,
          CreateDTOClass: CreatePrintMachineInput,
        },
      ],
    }),
  ],
})
export class PrintMachineModule {}
