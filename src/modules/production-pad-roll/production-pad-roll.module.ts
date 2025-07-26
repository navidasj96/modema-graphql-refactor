import { Module } from '@nestjs/common';
import { ProductionPadRollService } from './production-pad-roll.service';
import { ProductionPadRollResolver } from './production-pad-roll.resolver';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ProductionPadRoll as ProductionPadRollGraphQL } from '@/modules/production-pad-roll/domain/production-pad-roll.entity';
import { CreateProductionPadRollInput } from '@/modules/production-pad-roll/dto/create-production-pad-roll.input';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql/src/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';

@Module({
  providers: [ProductionPadRollResolver, ProductionPadRollService],
  imports: [
    TypeOrmModule.forFeature([ProductionPadRoll]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductionPadRoll])],
      resolvers: [
        {
          EntityClass: ProductionPadRoll,
          DTOClass: ProductionPadRollGraphQL,
          CreateDTOClass: CreateProductionPadRollInput,
        },
      ],
    }),
  ],
  exports: [ProductionPadRollService],
})
export class ProductionPadRollModule {}
