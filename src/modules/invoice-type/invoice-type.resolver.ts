import { Resolver } from '@nestjs/graphql';
import { InvoiceTypeService } from './invoice-type.service';
import { InvoiceType } from '@/modules/invoice-type/domain/invoice-type';

@Resolver(() => InvoiceType)
export class InvoiceTypeResolver {
  constructor(private readonly invoiceTypeService: InvoiceTypeService) {}
}
