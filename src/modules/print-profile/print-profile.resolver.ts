import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PrintProfileService } from './print-profile.service';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Resolver(() => PrintProfile)
export class PrintProfileResolver {
  constructor(private readonly printProfileService: PrintProfileService) {}

  @Mutation(() => GeneralResponseDto)
  async changeActivePrintProfile(
    @Args('printProfileId', {
      type: () => Number,
    })
    printProfileId: number,
    @Context() context: { req: UserContext }
  ) {
    return await this.printProfileService.changeActivePrintProfile(
      context,
      printProfileId
    );
  }
}
