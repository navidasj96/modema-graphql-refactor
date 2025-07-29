import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionPadService } from './production-pad.service';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { UseGuards } from '@nestjs/common';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { PrintCarpetPadLabelsInput } from '@/modules/production-pad/dto/print-carpet-pad-labels.input';
import { PrintCarpetPadLabelsOutput } from '@/modules/production-pad/dto/print-carpet-pad-labels.output';
import { CreateCarpetPadOutput } from '@/modules/production-pad/dto/create-carpet-pad-output';
import { ProductionPadListInput } from '@/modules/production-pad/dto/prodcution-pad-list.input';
import { ProductionPadListOutput } from '@/modules/production-pad/dto/production-pad-list.output';
import { ProductionPadPermissions } from '@/utils/permissions';
import { BasicCarpetSizesAndRollsRefCodeOutput } from '@/modules/production-pad/dto/basic-carpet-sizes-and-rolls-ref-code.output';
import { UpdateSelectedProductionPadsStatusInput } from '@/modules/production-pad/dto/update-selected-production-pads-status.input';
import { ProductionPadProgress } from '@/modules/production-pad/dto/prodction-pad-progress.output';

@Resolver(() => ProductionPad)
export class ProductionPadResolver {
  constructor(private readonly productionPadService: ProductionPadService) {}

  @UseGuards(PermissionsGuard)
  @Permissions(['print carpet pad tags'])
  @Mutation(() => CreateCarpetPadOutput)
  async createCarpetPads(
    @Args('createCarpetPadsInput', { type: () => CreateCarpetPadInput })
    createCarpetPadInput: CreateCarpetPadInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.productionPadService.createCarpetPads(
      createCarpetPadInput,
      context
    );
  }

  @Mutation(() => PrintCarpetPadLabelsOutput)
  async printCarpetPadLabels(
    @Args('printCarpetPadLabelsInput', {
      type: () => PrintCarpetPadLabelsInput,
    })
    printCarpetPadLabelsInput: PrintCarpetPadLabelsInput
  ) {
    return await this.productionPadService.printCarpetPadLabels(
      printCarpetPadLabelsInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionPadPermissions.PERMISSION_TO_VIEW])
  @Query(() => ProductionPadListOutput)
  async productionPadList(
    @Args('productionPadListInput', {
      type: () => ProductionPadListInput,
    })
    productionPadListInput: ProductionPadListInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.productionPadService.productionPadList(
      productionPadListInput,
      context
    );
  }

  @Query(() => BasicCarpetSizesAndRollsRefCodeOutput)
  async basicCarpetSizesAndRollRefCode() {
    return await this.productionPadService.basicCarpetSizesAndRollRefCode();
  }

  @UseGuards(PermissionsGuard)
  @Permissions(['edit roll reference code'])
  @Mutation(() => GeneralResponseDto)
  async updateRollReferenceCode(
    @Args('padRollRefCode', { type: () => String })
    padRollRefCode: string,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.productionPadService.updateRollReferenceCode(
      padRollRefCode,
      context
    );
  }

  @Mutation(() => GeneralResponseDto)
  async updateSelectedProductionPadsStatus(
    @Args('updateSelectedProductionPadsStatusInput', {
      type: () => UpdateSelectedProductionPadsStatusInput,
    })
    updateSelectedProductionPadsStatusInput: UpdateSelectedProductionPadsStatusInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.productionPadService.updateSelectedProductionPadsStatus(
      updateSelectedProductionPadsStatusInput,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([
    ProductionPadPermissions.PERMISSION_TO_VIEW_PAD_PRODUCTION_PROGRESS,
  ])
  @Query(() => ProductionPadProgress)
  async productionPadProgress(
    @Args('productionPadProgressInput', { type: () => Number })
    productionPadId: number
  ) {
    return await this.productionPadService.productionPadProgress(
      productionPadId
    );
  }
}
