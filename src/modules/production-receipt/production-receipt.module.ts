import { Module } from '@nestjs/common';
import { ProductionReceiptService } from './production-receipt.service';
import { ProductionReceiptResolver } from './production-receipt.resolver';
import { ProductionReceipt } from '@/modules/production-receipt/entities/production-receipt.entity';
import { ProductionReceipt as ProductionReceiptGraphQL } from '@/modules/production-receipt/domain/production-receipt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionReceiptInput } from '@/modules/production-receipt/dto/create-production-receipt.input';

@Module({
  providers: [ProductionReceiptService, ProductionReceiptResolver],
  imports: [
    TypeOrmModule.forFeature([ProductionReceipt]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionReceipt])],
      resolvers: [
        {
          EntityClass: ProductionReceipt,
          DTOClass: ProductionReceiptGraphQL,
          CreateDTOClass: CreateProductionReceiptInput,
        },
      ],
    }),
  ],
  exports: [ProductionReceiptService],
})
export class ProductionReceiptModule {}
