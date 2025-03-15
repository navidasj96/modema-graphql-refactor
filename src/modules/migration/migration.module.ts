import { Module } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { MigrationResolver } from './migration.resolver';
import { Migration } from '@/modules/migration/entities/migration.entity';
import { Migration as MigrationGraphQL } from '@/modules/migration/domain/migration';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateMigrationInput } from '@/modules/migration/dto/create-migration.input';

@Module({
  providers: [MigrationResolver, MigrationService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Migration])],
      resolvers: [
        {
          EntityClass: Migration,
          DTOClass: MigrationGraphQL,
          CreateDTOClass: CreateMigrationInput,
        },
      ],
    }),
  ],
})
export class MigrationModule {}
