import { Module } from '@nestjs/common';
import { InvoiceBankGatewayHistoryService } from './invoice-bank-gateway-history.service';
import { InvoiceBankGatewayHistoryResolver } from './invoice-bank-gateway-history.resolver';
import { InvoiceBankGatewayHistory } from '@/modules/invoice-bank-gateway-history/entities/invoice-bank-gateway-history.entity';
import { InvoiceBankGatewayHistory as InvoiceBankGatewayHistoryGraphQL } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceBankGatewayHistoryInput } from '@/modules/invoice-bank-gateway-history/dto/create-invoice-bank-gateway-history.input';

@Module({
  providers: [
    InvoiceBankGatewayHistoryResolver,
    InvoiceBankGatewayHistoryService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([InvoiceBankGatewayHistory]),
      ],
      resolvers: [
        {
          EntityClass: InvoiceBankGatewayHistory,
          DTOClass: InvoiceBankGatewayHistoryGraphQL,
          CreateDTOClass: CreateInvoiceBankGatewayHistoryInput,
        },
      ],
    }),
  ],
})
export class InvoiceBankGatewayHistoryModule {}
