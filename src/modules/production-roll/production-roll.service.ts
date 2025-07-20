import { Injectable } from '@nestjs/common';
import { CreateProductionRollInput } from './dto/create-production-roll.input';
import { UpdateProductionRollInput } from './dto/update-production-roll.input';
import { EntityManager, FindOneOptions, Repository } from 'typeorm';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductionRollService {
  constructor(
    /**
     * inject productionRollRepository
     */
    @InjectRepository(ProductionRoll)
    private readonly productionRollRepository: Repository<ProductionRoll>
  ) {}
  create(createProductionRollInput: CreateProductionRollInput) {
    return 'This action adds a new productionRoll';
  }

  findAll() {
    return `This action returns all productionRoll`;
  }

  async findOne(options: FindOneOptions<ProductionRoll>) {
    return await this.productionRollRepository.findOne(options);
  }

  update(id: number, updateProductionRollInput: UpdateProductionRollInput) {
    return `This action updates a #${id} productionRoll`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionRoll`;
  }

  async save(productionRoll: ProductionRoll, manager: EntityManager) {
    const productionRollRepository = manager
      ? manager.getRepository(ProductionRoll)
      : this.productionRollRepository;
    return await productionRollRepository.save(productionRoll);
  }
}
