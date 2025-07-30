import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionRollProvider {
  constructor(
    /**
     * inject productionRollRepository
     */
    @InjectRepository(ProductionRoll)
    private readonly productionRollRepository: Repository<ProductionRoll>
  ) {}

  async productionRollList(productionRollInput: ProductionRollInput) {
    const { isShaggy, search, limit, offset } = productionRollInput;

    const productionRollQuery = this.productionRollRepository
      .createQueryBuilder('productionRoll')

      .leftJoinAndSelect(
        'ProductionReceipt',
        'receipt',
        'receipt.productionRollId = productionRoll.id'
      )
      .where('productionRoll.isShaggy = :isShaggy', {
        isShaggy: isShaggy ? 1 : 0,
      })
      .orderBy('productionRoll.id', 'DESC');

    if (limit) {
      productionRollQuery.take(limit);
    }
    if (offset) {
      productionRollQuery.skip(offset);
    }

    if (search.length > 0) {
      productionRollQuery
        .where('productionRoll.rollNumber LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('productionRoll.billNumber LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('ProductionReceipt.receiptNumber LIKE :search', {
          search: `%${search}%`,
        });
    }

    const [productionRolls, count] =
      await productionRollQuery.getManyAndCount();
    return { productionRolls, count };
  }
}
