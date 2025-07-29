import { Injectable } from '@nestjs/common';

import { CreatePadTagsProvider } from '@/modules/production-pad/providers/create-pad-tags.provider';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintCarpetPadLabelsInput } from '@/modules/production-pad/dto/print-carpet-pad-labels.input';
import { ProductionPadProvider } from '@/modules/production-pad/providers/production-pad.provider';
import { ProductionPadListInput } from '@/modules/production-pad/dto/prodcution-pad-list.input';
import { UpdateSelectedProductionPadsStatusInput } from '@/modules/production-pad/dto/update-selected-production-pads-status.input';

@Injectable()
export class ProductionPadService {
  constructor(
    /**
     * inject createPadTagsProvider
     */
    private readonly createPadTagsProvider: CreatePadTagsProvider,

    /**
     * inject productionPadProvider
     */
    private readonly productionPadProvider: ProductionPadProvider
  ) {}

  async createCarpetPads(
    createCarpetPadInput: CreateCarpetPadInput,
    context: { req: UserContext }
  ) {
    return await this.createPadTagsProvider.createCarpetPads(
      createCarpetPadInput,
      context
    );
  }

  async printCarpetPadLabels(
    printCarpetPadLabelsInput: PrintCarpetPadLabelsInput
  ) {
    return await this.createPadTagsProvider.printCarpetPadLabels(
      printCarpetPadLabelsInput
    );
  }

  async productionPadList(
    productionPadListInput: ProductionPadListInput,
    context: { req: UserContext }
  ) {
    return await this.productionPadProvider.productionPadList(
      productionPadListInput,
      context
    );
  }

  async basicCarpetSizesAndRollRefCode() {
    return await this.productionPadProvider.basicCarpetSizesAndRollRefCode();
  }

  async updateRollReferenceCode(
    padRollRefCode: string,
    context: { req: UserContext }
  ) {
    return await this.productionPadProvider.updateRollReferenceCode(
      padRollRefCode,
      context
    );
  }

  async updateSelectedProductionPadsStatus(
    updateSelectedProductionPadsStatusInput: UpdateSelectedProductionPadsStatusInput,
    context: { req: UserContext }
  ) {
    return await this.productionPadProvider.updateSelectedProductionPadsStatus(
      updateSelectedProductionPadsStatusInput,
      context
    );
  }
}
