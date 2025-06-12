import { Resolver } from '@nestjs/graphql';
import { ProductionReceiptTypeService } from './production-receipt-type.service';
import { ProductionReceiptType } from '@/modules/production-receipt-type/domain/production-receipt-type';

@Resolver(() => ProductionReceiptType)
export class ProductionReceiptTypeResolver {
  constructor(
    private readonly productionReceiptTypeService: ProductionReceiptTypeService
  ) {}
}
