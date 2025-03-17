import { Module } from '@nestjs/common';
import { ProductionPadService } from './production-pad.service';
import { ProductionPadResolver } from './production-pad.resolver';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { ProductionPad as ProductionPadGraphQL } from '@/modules/production-pad/domain/production-pad';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionPadInput } from '@/modules/production-pad/dto/create-production-pad.input';

@Module({
  providers: [ProductionPadResolver, ProductionPadService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionPad])],
      resolvers: [
        {
          EntityClass: ProductionPad,
          DTOClass: ProductionPadGraphQL,
          CreateDTOClass: CreateProductionPadInput,
        },
      ],
    }),
  ],
})
export class ProductionPadModule {}
