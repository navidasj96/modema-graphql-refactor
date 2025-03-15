import { Injectable } from '@nestjs/common';
import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Injectable()
export class ActivityService {
  constructor(
    /**
     * Inject activityRepository
     */
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserWithActivities(userId: number): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { id: userId },
      relations: ['activities'],
    });
  }

  async getActivityWithUser(activityId: number): Promise<Activity | null> {
    return this.activityRepository.findOne({
      where: { id: activityId },
      relations: ['user'],
    });
  }

  create(createActivityInput: CreateActivityInput) {
    return 'This action adds a new activity';
  }

  async findAll() {
    return await this.activityRepository.findOne({ where: { id: 1475012 } });
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
