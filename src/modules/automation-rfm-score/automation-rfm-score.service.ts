import { Injectable } from '@nestjs/common';
import { CreateAutomationRfmScoreInput } from './dto/create-automation-rfm-score.input';
import { UpdateAutomationRfmScoreInput } from './dto/update-automation-rfm-score.input';
import { Repository } from 'typeorm';
import { AutomationRfmScore } from './entities/automation-rfm-score.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutomationRfmScoreService {
  constructor(
    /**
     * Inject automationRfmScoreRepository
     */
    @InjectRepository(AutomationRfmScore)
    private readonly automationRfmScoreRepository: Repository<AutomationRfmScore>,
  ) {}

  create(createAutomationRfmScoreInput: CreateAutomationRfmScoreInput) {
    return 'This action adds a new automationRfmScore';
  }

  findAll() {
    return `This action returns all automationRfmScore`;
  }

  async findOne(id: number) {
    return await this.automationRfmScoreRepository.findOne({ where: { id } });
  }

  update(
    id: number,
    updateAutomationRfmScoreInput: UpdateAutomationRfmScoreInput,
  ) {
    return `This action updates a #${id} automationRfmScore`;
  }

  remove(id: number) {
    return `This action removes a #${id} automationRfmScore`;
  }
}
