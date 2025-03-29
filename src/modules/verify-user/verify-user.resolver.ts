import { Resolver } from '@nestjs/graphql';
import { VerifyUserService } from './verify-user.service';
import { VerifyUser } from '@/modules/verify-user/domain/verify-user';

@Resolver(() => VerifyUser)
export class VerifyUserResolver {
  constructor(private readonly verifyUserService: VerifyUserService) {}
}
