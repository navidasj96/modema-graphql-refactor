import { Injectable } from '@nestjs/common';
import { CreateProductionRollInput } from './dto/create-production-roll.input';
import { UpdateProductionRollInput } from './dto/update-production-roll.input';
import { EntityManager, FindOneOptions, Repository } from 'typeorm';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductionRollProvider } from '@/modules/production-roll/providers/production-roll.provider';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

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

  async productionRollWastage(productionRollIds: number[]) {
    return await this.productionRollProvider.productionRollWastage(
      productionRollIds
    );
  }
}
