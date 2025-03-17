import { Module } from '@nestjs/common';
import { ProductionPadStatusService } from './production-pad-status.service';
import { ProductionPadStatusResolver } from './production-pad-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionPadStatus } from '@/modules/production-pad-status/entities/production-pad-status.entity';
import { ProductionPadStatus as ProductionPadStatusGraphQL } from '@/modules/production-pad-status/domain/production-pad-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionPadStatusInput } from '@/modules/production-pad-status/dto/create-production-pad-status.input';

@Module({
  providers: [ProductionPadStatusResolver, ProductionPadStatusService],
  imports: [
    TypeOrmModule.forFeature([ProductionPadStatus]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionPadStatus])],
      resolvers: [
        {
          EntityClass: ProductionPadStatus,
          DTOClass: ProductionPadStatusGraphQL,
          CreateDTOClass: CreateProductionPadStatusInput,
        },
      ],
    }),
  ],
})
export class ProductionPadStatusModule {}
