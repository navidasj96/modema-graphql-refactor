import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { ProductionRollWastageInput } from '@/modules/production-roll/dto/production-roll-wastage.input';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { ProductionRollProvider } from '@/modules/production-roll/providers/production-roll.provider';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOneOptions, Repository } from 'typeorm';
import { CreateProductionRollInput } from './dto/create-production-roll.input';
import { UpdateProductionRollInput } from './dto/update-production-roll.input';

@Injectable()
export class ProductionRollService {
  constructor(
    @InjectRepository(ProductionRoll)
    private readonly productionRollRepository: Repository<ProductionRoll>,
    /**
     * inject ProductionRollProvider
     */
    private readonly productionRollProvider: ProductionRollProvider
  ) {}

  create(
    createProductionRollInput: CreateProductionRollInput,
    context: { req: UserContext }
  ) {
    return this.productionRollProvider.create(
      createProductionRollInput,
      context
    );
  }

  async findOne(options: FindOneOptions<ProductionRoll>) {
    return await this.productionRollRepository.findOne(options);
  }

  async save(productionRoll: ProductionRoll, manager: EntityManager) {
    const productionRollRepository = manager
      ? manager.getRepository(ProductionRoll)
      : this.productionRollRepository;
    return await productionRollRepository.save(productionRoll);
  }

  async productionRollList(productionRollInput: ProductionRollInput) {
    return await this.productionRollProvider.productionRollList(
      productionRollInput
    );
  }

  async closeProductionRoll(
    productionRollId: number,
    context: { req: UserContext }
  ) {
    return await this.productionRollProvider.closeProductionRoll(
      productionRollId,
      context
    );
  }

  async productionRollWastage(
    productionRollWastageInput: ProductionRollWastageInput
  ) {
    return await this.productionRollProvider.productionRollWastage(
      productionRollWastageInput
    );
  }

  async printRollsTags(productionRollId: number) {
    return await this.productionRollProvider.printRollsTags(productionRollId);
  }

  async updateProductionRoll(
    updateProductionRollInput: UpdateProductionRollInput
  ) {
    return await this.productionRollProvider.updateProductionRoll(
      updateProductionRollInput
    );
  }

  async deleteProductionRoll(productionRollId: number) {
    return await this.productionRollProvider.deleteProductionRoll(
      productionRollId
    );
  }
}
