import { Module } from '@nestjs/common';
import { SubproductStockHistoryService } from './subproduct-stock-history.service';
import { SubproductStockHistoryResolver } from './subproduct-stock-history.resolver';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/entities/subproduct-stock-history.entity';
import { SubproductStockHistory as SubproductStockHistoryGraphQL } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubproductStockHistoryInput } from '@/modules/subproduct-stock-history/dto/create-subproduct-stock-history.input';

@Module({
  providers: [SubproductStockHistoryResolver, SubproductStockHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubproductStockHistory])],
      resolvers: [
        {
          EntityClass: SubproductStockHistory,
          DTOClass: SubproductStockHistoryGraphQL,
          CreateDTOClass: CreateSubproductStockHistoryInput,
        },
      ],
    }),
  ],
})
export class SubproductStockHistoryModule {}
