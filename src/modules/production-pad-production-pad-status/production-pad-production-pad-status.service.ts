import { Injectable } from '@nestjs/common';

import { EntityManager, Repository } from 'typeorm';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/entities/production-pad-production-pad-status.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductionPadProductionPadStatusService {
  constructor(
    /**
     * inject productionPadProductionPadStatusRepository
     */
    @InjectRepository(ProductionPadProductionPadStatus)
    private readonly productionPadProductionPadStatusRepository: Repository<ProductionPadProductionPadStatus>
  ) {}

  async attach(
    productionPadId: number,
    productionPadStatusId: number,
    userId: number,
    manager: EntityManager
  ) {
    const productionPadProductionPadStatusRepository = manager
      ? manager.getRepository(ProductionPadProductionPadStatus)
      : this.productionPadProductionPadStatusRepository;

    await productionPadProductionPadStatusRepository.save({
      productionPadId,
      productionPadStatusId,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
