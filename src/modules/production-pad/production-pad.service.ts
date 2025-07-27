import { Injectable } from '@nestjs/common';

import { CreatePadTagsProvider } from '@/modules/production-pad/providers/create-pad-tags.provider';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintCarpetPadLabelsInput } from '@/modules/production-pad/dto/print-carpet-pad-labels.input';

@Injectable()
export class ProductionPadService {
  constructor(
    /**
     * inject createPadTagsProvider
     */
    private readonly createPadTagsProvider: CreatePadTagsProvider
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
}
