import { Module } from '@nestjs/common';
import { ProductionPadService } from './production-pad.service';
import { ProductionPadResolver } from './production-pad.resolver';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { ProductionPad as ProductionPadGraphQL } from '@/modules/production-pad/domain/production-pad';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductionPadInput } from '@/modules/production-pad/dto/create-production-pad.input';
import { CreatePadTagsProvider } from '@/modules/production-pad/providers/create-pad-tags.provider';
import { SettingModule } from '@/modules/setting/setting.module';
import { SubproductModule } from '@/modules/subproduct/subproduct.module';
import { ProductionPadRollModule } from '@/modules/production-pad-roll/production-pad-roll.module';
import { ProductionPadProductionPadStatusModule } from '@/modules/production-pad-production-pad-status/production-pad-production-pad-status.module';
import { BasicCarpetSizeModule } from '@/modules/basic-carpet-size/basic-carpet-size.module';

@Module({
  providers: [
    ProductionPadResolver,
    ProductionPadService,
    CreatePadTagsProvider,
  ],
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
    SettingModule,
    SubproductModule,
    ProductionPadRollModule,
    ProductionPadProductionPadStatusModule,
    BasicCarpetSizeModule,
  ],
})
export class ProductionPadModule {}
