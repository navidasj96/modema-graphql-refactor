import { Module } from '@nestjs/common';
import { ProductionPadProductionPadStatusService } from './production-pad-production-pad-status.service';
import { ProductionPadProductionPadStatusResolver } from './production-pad-production-pad-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/entities/production-pad-production-pad-status.entity';
import { ProductionPadProductionPadStatus as ProductionPadProductionPadStatusGraphQL } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionPadProductionPadStatusInput } from '@/modules/production-pad-production-pad-status/dto/create-production-pad-production-pad-status.input';

@Module({
  providers: [
    ProductionPadProductionPadStatusResolver,
    ProductionPadProductionPadStatusService,
  ],
  imports: [
    TypeOrmModule.forFeature([ProductionPadProductionPadStatus]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ProductionPadProductionPadStatus]),
      ],
      resolvers: [
        {
          EntityClass: ProductionPadProductionPadStatus,
          DTOClass: ProductionPadProductionPadStatusGraphQL,
          CreateDTOClass: CreateProductionPadProductionPadStatusInput,
        },
      ],
    }),
  ],
  exports: [ProductionPadProductionPadStatusService],
})
export class ProductionPadProductionPadStatusModule {}
