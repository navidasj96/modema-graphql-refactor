import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductionRollService } from './production-roll.service';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { ProductionRollListOutput } from '@/modules/production-roll/dto/production-roll-list.output';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { ProductionRollPermissions } from '@/utils/permissions';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';

@Resolver(() => ProductionRoll)
export class ProductionRollResolver {
  constructor(private readonly productionRollService: ProductionRollService) {}

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_VIEW])
  @Query(() => ProductionRollListOutput)
  async productionRollList(
    @Args('productionRollListInput', { type: () => ProductionRollInput })
    productionRollInput: ProductionRollInput
  ) {
    return await this.productionRollService.productionRollList(
      productionRollInput
    );
  }
}
