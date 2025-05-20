import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingResolver } from './setting.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from '@/modules/setting/entities/setting.entity';
import { Setting as SettingGraphql } from '@/modules/setting/domain/setting';

import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSettingInput } from '@/modules/setting/dto/create-setting.input';

@Module({
  providers: [SettingResolver, SettingService],
  imports: [
    TypeOrmModule.forFeature([Setting]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Setting])],
      resolvers: [
        {
          EntityClass: Setting,
          DTOClass: SettingGraphql,
          CreateDTOClass: CreateSettingInput,
        },
      ],
    }),
  ],
})
export class SettingModule {}
