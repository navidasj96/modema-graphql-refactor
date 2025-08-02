import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductionReceiptService } from './production-receipt.service';
import { ProductionReceipt } from '@/modules/production-receipt/domain/production-receipt';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { UseGuards } from '@nestjs/common';
import { ProductionReceiptPermissions } from '@/utils/permissions';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { CreateProductionReceiptInput } from '@/modules/production-receipt/dto/create-production-receipt.input';
import { UpdateProductionReceiptInput } from '@/modules/production-receipt/dto/update-production-receipt.input';

@Resolver(() => ProductionReceipt)
export class ProductionReceiptResolver {
  constructor(
    private readonly productionReceiptService: ProductionReceiptService
  ) {}

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionReceiptPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async createProductionReceipt(
    @Args('createProductionReceiptInput')
    createProductionReceiptInput: CreateProductionReceiptInput
  ) {
    return await this.productionReceiptService.create(
      createProductionReceiptInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionReceiptPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async updateProductionReceipt(
    @Args('updateProductionReceiptInput')
    updateProductionReceiptInput: UpdateProductionReceiptInput
  ) {
    return await this.productionReceiptService.update(
      updateProductionReceiptInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionReceiptPermissions.PERMISSION_TO_CHANGE])
  @Mutation(() => GeneralResponseDto)
  async deleteProductionReceipt(@Args('id', { type: () => Int }) id: number) {
    return await this.productionReceiptService.delete(id);
  }
}
