import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { CreateProductionRollInput } from '@/modules/production-roll/dto/create-production-roll.input';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { ProductionRollListOutput } from '@/modules/production-roll/dto/production-roll-list.output';
import { ProductionRollWastageInput } from '@/modules/production-roll/dto/production-roll-wastage.input';
import { ProductionRollWastageOutput } from '@/modules/production-roll/dto/production-roll-wastage.output';
import { UpdateProductionRollInput } from '@/modules/production-roll/dto/update-production-roll.input';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import {
  InvoiceProductItemPermissions,
  ProductionRollPermissions,
} from '@/utils/permissions';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionRollService } from './production-roll.service';

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
  @Query(() => ProductionRollWastageOutput)
  async productionRollWastage(
    @Args('productionRollIds', { type: () => ProductionRollWastageInput })
    productionRollWastageInput: ProductionRollWastageInput
  ) {
    return await this.productionRollService.productionRollWastage(
      productionRollWastageInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([InvoiceProductItemPermissions.PERMISSION_TO_PRINT_ITEMS_TAGS])
  @Query(() => [InvoiceProductItemPure])
  async printRollsTags(
    @Args('productionRollId', {
      type: () => Number,
    })
    productionRollId: number
  ) {
    return await this.productionRollService.printRollsTags(productionRollId);
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async updateProductionRoll(
    @Args('updateProductionRollInput', {
      type: () => UpdateProductionRollInput,
    })
    updateProductionRollInput: UpdateProductionRollInput
  ) {
    return await this.productionRollService.updateProductionRoll(
      updateProductionRollInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionRollPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async deleteProductionRoll(
    @Args('productionRollId', { type: () => Number })
    productionRollId: number
  ) {
    return await this.productionRollService.deleteProductionRoll(
      productionRollId
    );
  }
}
