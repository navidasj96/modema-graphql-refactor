import { Injectable } from '@nestjs/common';
import { CreateAutomationEventInput } from './dto/create-automation-event.input';
import { UpdateAutomationEventInput } from './dto/update-automation-event.input';
import { Repository } from 'typeorm';
import { AutomationEvent } from './entities/automation-event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutomationEventService {
  constructor(
    /**
     * Inject automationEventRepository
     */
    @InjectRepository(AutomationEvent)
    private readonly automationEventRepository: Repository<AutomationEvent>
  ) {}

  create(createAutomationEventInput: CreateAutomationEventInput) {
    return 'This action adds a new automationEvent';
  }

  findAll() {
    return `This action returns all automationEvent`;
  }

  async findOne(id: number) {
    return await this.automationEventRepository.findOneBy({ id });
  }

  update(id: number, updateAutomationEventInput: UpdateAutomationEventInput) {
    return `This action updates a #${id} automationEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} automationEvent`;
  }
}
