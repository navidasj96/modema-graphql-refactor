import { Module } from '@nestjs/common';
import { VisitorSaleService } from './visitor-sale.service';
import { VisitorSaleResolver } from './visitor-sale.resolver';
import { VisitorSale } from '@/modules/visitor-sale/entities/visitor-sale.entity';
import { VisitorSale as VisitorSaleGraphQL } from '@/modules/visitor-sale/domain/visitor-sale';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVisitorSaleInput } from '@/modules/visitor-sale/dto/create-visitor-sale.input';

@Module({
  providers: [VisitorSaleResolver, VisitorSaleService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VisitorSale])],
      resolvers: [
        {
          EntityClass: VisitorSale,
          DTOClass: VisitorSaleGraphQL,
          CreateDTOClass: CreateVisitorSaleInput,
        },
      ],
    }),
  ],
})
export class VisitorSaleModule {}
