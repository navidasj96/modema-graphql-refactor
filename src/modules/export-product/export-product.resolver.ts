import { Resolver } from '@nestjs/graphql';
import { ExportProductService } from './export-product.service';
import { ExportProduct } from './domain/export-product';

@Resolver(() => ExportProduct)
export class ExportProductResolver {
  constructor(private readonly exportProductService: ExportProductService) {}
}
