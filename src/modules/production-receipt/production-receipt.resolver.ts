import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductionReceiptService } from './production-receipt.service';
import { ProductionReceipt } from '@/modules/production-receipt/domain/production-receipt';

@Resolver(() => ProductionReceipt)
export class ProductionReceiptResolver {
  constructor(
    private readonly productionReceiptService: ProductionReceiptService
  ) {}
}
