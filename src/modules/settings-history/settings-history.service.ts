import { Injectable } from '@nestjs/common';
import { CreateSettingsHistoryInput } from './dto/create-settings-history.input';
import { UpdateSettingsHistoryInput } from './dto/update-settings-history.input';
import { SettingsHistory } from '@/modules/settings-history/entities/settings-history.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SettingsHistoryService {
  constructor(
    /**
     * inject settingsHistoryRepository
     */
    @InjectRepository(SettingsHistory)
    private readonly settingsHistoryRepository: Repository<SettingsHistory>
  ) {}
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

  async save(settingsHistory: Partial<SettingsHistory>) {
    const entity = this.settingsHistoryRepository.create(settingsHistory);
    return this.settingsHistoryRepository.save(entity);
  }
}
