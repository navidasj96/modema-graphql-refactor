import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';

@Injectable()
export class ProductionPadRollService {
  constructor(
    /**
     * inject productionPadRollRepository
     */
    @InjectRepository(ProductionPadRoll)
    private readonly productionPadRollRepository: Repository<ProductionPadRoll>
  ) {}

  async findOne(options: FindOneOptions<ProductionPadRoll>) {
    return await this.productionPadRollRepository.findOne(options);
  }

  async findMany(options?: FindManyOptions<ProductionPadRoll>) {
    return await this.productionPadRollRepository.find(options);
  }
}
