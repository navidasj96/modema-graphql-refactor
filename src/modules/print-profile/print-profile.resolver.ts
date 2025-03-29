import { Resolver } from '@nestjs/graphql';
import { PrintProfileService } from './print-profile.service';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';

@Resolver(() => PrintProfile)
export class PrintProfileResolver {
  constructor(private readonly printProfileService: PrintProfileService) {}
}
