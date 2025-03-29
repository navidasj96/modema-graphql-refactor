import { Resolver } from '@nestjs/graphql';
import { TmpUserService } from './tmp-user.service';
import { TmpUser } from '@/modules/tmp-user/domain/tmp-user';

@Resolver(() => TmpUser)
export class TmpUserResolver {
  constructor(private readonly tmpUserService: TmpUserService) {}
}
