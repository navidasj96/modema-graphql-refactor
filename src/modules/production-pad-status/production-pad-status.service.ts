import { ProductionPadStatus } from '@/modules/production-pad-status/entities/production-pad-status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionPadStatusService {
  constructor(
    /**
     * inject productionPadStatusRepository
     */
    @InjectRepository(ProductionPadStatus)
    private readonly productionPadStatusRepository: Repository<ProductionPadStatus>
  ) {}

  async productionPadStatusById(productionPadId: number) {
    return await this.productionPadStatusRepository
      .createQueryBuilder('productionPadStatus')
      .leftJoin(
        'productionPadStatus.productionPadProductionPadStatuses',
        'ppps'
      )
      .leftJoin('ppps.productionPad', 'productionPad')
      .leftJoin('ppps.user', 'user')
      .where('productionPad.id = :id', { id: productionPadId })
      .getMany();
  }
}
