import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class ActivityService {
  constructor(
    /**
     * Inject activityRepository
     */
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    private readonly userService: UserService,
  ) {}

  async getUserWithActivities(userId: number) {
    return await this.userService.findOne(Number(userId));
  }

  async getActivityWithUser(activityId: number): Promise<Activity | null> {
    return this.activityRepository.findOne({
      where: { id: activityId },
      relations: ['user'],
    });
  }
}
