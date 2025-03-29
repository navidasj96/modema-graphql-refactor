import { Resolver } from '@nestjs/graphql';
import { InvoiceAddressService } from './invoice-address.service';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';

@Resolver(() => InvoiceAddress)
export class InvoiceAddressResolver {
  constructor(private readonly invoiceAddressService: InvoiceAddressService) {}
}
