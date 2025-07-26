import { Injectable } from '@nestjs/common';
import { CreateProductionPadInput } from './dto/create-production-pad.input';
import { UpdateProductionPadInput } from './dto/update-production-pad.input';
import { CreatePadTagsProvider } from '@/modules/production-pad/providers/create-pad-tags.provider';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

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
}
