import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MigrationService } from './migration.service';
import { CreateMigrationInput } from './dto/create-migration.input';
import { UpdateMigrationInput } from './dto/update-migration.input';
import { Migration } from '@/modules/migration/domain/migration';

@Resolver(() => Migration)
export class MigrationResolver {
  constructor(private readonly migrationService: MigrationService) {}

  @Mutation(() => Migration)
  createMigration(
    @Args('createMigrationInput') createMigrationInput: CreateMigrationInput,
  ) {
    return this.migrationService.create(createMigrationInput);
  }

  @Query(() => [Migration], { name: 'migration' })
  findAll() {
    return this.migrationService.findAll();
  }

  @Query(() => Migration, { name: 'migration' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.migrationService.findOne(id);
  }

  @Mutation(() => Migration)
  updateMigration(
    @Args('updateMigrationInput') updateMigrationInput: UpdateMigrationInput,
  ) {
    return this.migrationService.update(
      updateMigrationInput.id,
      updateMigrationInput,
    );
  }

  @Mutation(() => Migration)
  removeMigration(@Args('id', { type: () => Int }) id: number) {
    return this.migrationService.remove(id);
  }
}
