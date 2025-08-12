import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';
import { PrintProfilePure } from '@/modules/print-profile/domain/print-profile.pure';
import { CreatePrintProfileInput } from '@/modules/print-profile/dto/create-print-profile.input';
import { UpdatePrintProfileInput } from '@/modules/print-profile/dto/update-print-profile.input';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { PrintProfilePermissions } from '@/utils/permissions';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrintProfileService } from './print-profile.service';

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

  @UseGuards(PermissionsGuard)
  @Permissions([PrintProfilePermissions.PERMISSION_TO_VIEW])
  @Query(() => [PrintProfilePure])
  async printProfileList() {
    return await this.printProfileService.printProfileList();
  }

  @UseGuards(PermissionsGuard)
  @Permissions([PrintProfilePermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async createPrintProfile(
    @Args('createPrintProfileInput', { type: () => CreatePrintProfileInput })
    createPrintProfileInput: CreatePrintProfileInput,
    @Context() context: { req: UserContext }
  ): Promise<GeneralResponseDto> {
    return await this.printProfileService.createPrintProfile(
      createPrintProfileInput,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([PrintProfilePermissions.PERMISSION_TO_VIEW])
  @Query(() => PrintProfilePure, { nullable: true })
  async printProfileById(
    @Args('printProfileId', { type: () => Number }) printProfileId: number
  ) {
    return await this.printProfileService.printProfileById(printProfileId);
  }

  @UseGuards(PermissionsGuard)
  @Permissions([PrintProfilePermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async updatePrintProfile(
    @Args('updatePrintProfileInput', { type: () => UpdatePrintProfileInput })
    updatePrintProfileInput: UpdatePrintProfileInput
  ): Promise<GeneralResponseDto> {
    return await this.printProfileService.updatePrintProfile(
      updatePrintProfileInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([PrintProfilePermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async deletePrintProfile(
    @Args('printProfileId', { type: () => Number }) printProfileId: number
  ) {
    return await this.printProfileService.deletePrintProfile(printProfileId);
  }
}
