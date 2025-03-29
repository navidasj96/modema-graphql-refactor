import { Resolver } from '@nestjs/graphql';
import { VisitorSaleService } from './visitor-sale.service';
import { VisitorSale } from '@/modules/visitor-sale/domain/visitor-sale';

@Resolver(() => VisitorSale)
export class VisitorSaleResolver {
  constructor(private readonly visitorSaleService: VisitorSaleService) {}
}
