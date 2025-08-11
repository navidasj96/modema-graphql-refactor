import { ProductionPadRoll as ProductionPadRollGraphQL } from '@/modules/production-pad-roll/domain/production-pad-roll.entity';
import { CreateProductionPadRollInput } from '@/modules/production-pad-roll/dto/create-production-pad-roll.input';
import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';
import { CarpetPadTagsProvider } from '@/modules/production-pad-roll/providers/carpet-pad-tags.provider';
import { SettingModule } from '@/modules/setting/setting.module';
import { SettingsHistoryModule } from '@/modules/settings-history/settings-history.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql/src/module';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ProductionPadRollResolver } from './production-pad-roll.resolver';
import { ProductionPadRollService } from './production-pad-roll.service';

@Module({
  providers: [
    ProductionPadRollResolver,
    ProductionPadRollService,
    CarpetPadTagsProvider,
  ],
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
    SettingModule,
    SettingsHistoryModule,
  ],
  exports: [ProductionPadRollService],
})
export class ProductionPadRollModule {}
