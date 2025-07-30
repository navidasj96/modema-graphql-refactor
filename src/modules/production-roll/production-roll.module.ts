import { Module } from '@nestjs/common';
import { ProductionRollService } from './production-roll.service';
import { ProductionRollResolver } from './production-roll.resolver';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { ProductionRoll as ProductionRollGraphQL } from '@/modules/production-roll/domain/production-roll';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionRollInput } from '@/modules/production-roll/dto/create-production-roll.input';
import { ProductionRollProvider } from '@/modules/production-roll/providers/production-roll.provider';

@Module({
  providers: [
    ProductionRollResolver,
    ProductionRollService,
    ProductionRollProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionRoll])],
      resolvers: [
        {
          EntityClass: ProductionRoll,
          DTOClass: ProductionRollGraphQL,
          CreateDTOClass: CreateProductionRollInput,
        },
      ],
    }),
  ],
  exports: [ProductionRollService],
})
export class ProductionRollModule {}
