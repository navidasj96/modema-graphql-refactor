import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ActivityService } from '@/modules/activity/activity.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => ActivityService))
    private readonly activityService: ActivityService,
  ) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  test() {
    return this.activityService.getActivityWithUser(1);
  }
}
