import { Injectable } from '@nestjs/common';
import { CreateSettingsHistoryInput } from './dto/create-settings-history.input';
import { UpdateSettingsHistoryInput } from './dto/update-settings-history.input';

@Injectable()
export class SettingsHistoryService {
  create(createSettingsHistoryInput: CreateSettingsHistoryInput) {
    return 'This action adds a new settingsHistory';
  }

  findAll() {
    return `This action returns all settingsHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} settingsHistory`;
  }

  update(id: number, updateSettingsHistoryInput: UpdateSettingsHistoryInput) {
    return `This action updates a #${id} settingsHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} settingsHistory`;
  }
}
