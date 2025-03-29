import { Resolver } from '@nestjs/graphql';
import { MigrationService } from './migration.service';
import { Migration } from '@/modules/migration/domain/migration';

@Resolver(() => Migration)
export class MigrationResolver {
  constructor(private readonly migrationService: MigrationService) {}
}
