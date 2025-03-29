import { Resolver } from '@nestjs/graphql';
import { SubproductStockHistoryService } from './subproduct-stock-history.service';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';

@Resolver(() => SubproductStockHistory)
export class SubproductStockHistoryResolver {
  constructor(
    private readonly subproductStockHistoryService: SubproductStockHistoryService,
  ) {}
}
