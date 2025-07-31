import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionRollService } from './production-roll.service';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { ProductionRollListOutput } from '@/modules/production-roll/dto/production-roll-list.output';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { ProductionRollPermissions } from '@/utils/permissions';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreateProductionRollInput } from '@/modules/production-roll/dto/create-production-roll.input';
import { GeneralResponseDto } from '@/utils/general-response.dto';

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

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async createProductionRoll(
    @Args('createProductionRollInput', {
      type: () => CreateProductionRollInput,
    })
    createProductionRollInput: CreateProductionRollInput,
    @Context() context: { req: UserContext }
  ) {
    return await this.productionRollService.create(
      createProductionRollInput,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async closeProductionRoll(
    @Args('productionRollId', {
      type: () => Number,
    })
    productionRollId: number,
    @Context() context: { req: UserContext }
  ) {
    return await this.productionRollService.closeProductionRoll(
      productionRollId,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_VIEW])
  @Query(() => ProductionRollListOutput)
  async productionRollWastage(
    @Args('productionRollIds', { type: () => [Number] })
    productionRollIds: number[]
  ) {
    return await this.productionRollService.productionRollWastage(
      productionRollIds
    );
  }
}
