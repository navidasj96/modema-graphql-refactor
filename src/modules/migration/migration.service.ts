import { Injectable } from '@nestjs/common';
import { CreateMigrationInput } from './dto/create-migration.input';
import { UpdateMigrationInput } from './dto/update-migration.input';

@Injectable()
export class MigrationService {
  create(createMigrationInput: CreateMigrationInput) {
    return 'This action adds a new migration';
  }

  findAll() {
    return `This action returns all migration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} migration`;
  }

  update(id: number, updateMigrationInput: UpdateMigrationInput) {
    return `This action updates a #${id} migration`;
  }

  remove(id: number) {
    return `This action removes a #${id} migration`;
  }
}
