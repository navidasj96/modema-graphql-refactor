import { ExitControlItemPure } from '@/modules/exit-control-item/domain/exit-control-item.pure';
import { ExitControlItemReportInput } from '@/modules/exit-control-item/dto/exit-control-item-report.input';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { ExitControlPermissions } from '@/utils/permissions';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ExitControlItem } from './domain/exit-control-item';
import { ExitControlItemService } from './exit-control-item.service';

@Resolver(() => ExitControlItem)
export class ExitControlItemResolver {
  constructor(
    private readonly exitControlItemService: ExitControlItemService
  ) {}

  @UseGuards(PermissionsGuard)
  @Permissions([ExitControlPermissions.PERMISSION_TO_VIEW_EXIT_CONTROL_REPORT])
  @Query(() => [ExitControlItemPure])
  async exitControlItemList(
    @Args('exitControlListInput', { type: () => ExitControlItemReportInput })
    exitControlItemReportInput: ExitControlItemReportInput
  ) {
    return await this.exitControlItemService.exitControlList(
      exitControlItemReportInput
    );
  }
}
