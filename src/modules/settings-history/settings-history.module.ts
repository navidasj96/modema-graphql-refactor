import { Module } from '@nestjs/common';
import { SettingsHistoryService } from './settings-history.service';
import { SettingsHistoryResolver } from './settings-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { SettingsHistory } from '@/modules/settings-history/entities/settings-history.entity';
import { SettingsHistory as SettingHistoryGraphql } from '@/modules/settings-history/domain/setting-history';
import { CreateSettingsHistoryInput } from '@/modules/settings-history/dto/create-settings-history.input';

@Module({
  providers: [SettingsHistoryResolver, SettingsHistoryService],
  imports: [
    TypeOrmModule.forFeature([SettingsHistory]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SettingsHistory])],
      resolvers: [
        {
          EntityClass: SettingsHistory,
          DTOClass: SettingHistoryGraphql,
          CreateDTOClass: CreateSettingsHistoryInput,
        },
      ],
    }),
  ],
})
export class SettingsHistoryModule {}
