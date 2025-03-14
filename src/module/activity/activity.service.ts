import { Injectable } from '@nestjs/common';
import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivityService {
  constructor(
    /**
     * Inject activityRepository
     */
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  create(createActivityInput: CreateActivityInput) {
    return 'This action adds a new activity';
  }

  async findAll() {
    return await this.activityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityInput: UpdateActivityInput) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
