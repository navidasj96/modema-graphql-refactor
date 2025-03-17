import { Module } from '@nestjs/common';
import { ProductionReceiptTypeService } from './production-receipt-type.service';
import { ProductionReceiptTypeResolver } from './production-receipt-type.resolver';
import { ProductionReceiptType } from '@/modules/production-receipt-type/entities/production-receipt-type.entity';
import { ProductionReceiptType as ProductionReceiptTypeGraphQL } from '@/modules/production-receipt-type/domain/production-receipt-type';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionReceiptTypeInput } from '@/modules/production-receipt-type/dto/create-production-receipt-type.input';

@Module({
  providers: [ProductionReceiptTypeResolver, ProductionReceiptTypeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionReceiptType])],
      resolvers: [
        {
          EntityClass: ProductionReceiptType,
          DTOClass: ProductionReceiptTypeGraphQL,
          CreateDTOClass: CreateProductionReceiptTypeInput,
        },
      ],
    }),
  ],
})
export class ProductionReceiptTypeModule {}
