import { Args, Query, Resolver } from '@nestjs/graphql';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { ReadyInvoiceProductItemsListInput } from '@/modules/invoice-product/dto/ready-invoice-product-items-list.input';
import { ReadyInvoiceProductItemsListOutput } from '@/modules/invoice-product/dto/ready-invoice-product-items-list.output';

@Resolver(() => InvoiceProduct)
export class InvoiceProductResolver {
  constructor(private readonly invoiceProductService: InvoiceProductService) {}

  @Query(() => ReadyInvoiceProductItemsListOutput)
  async readyInvoiceProductItemsList(
    @Args('readyInvoiceProductItemsListInput')
    readyInvoiceProductItemsListInput: ReadyInvoiceProductItemsListInput
  ) {
    return await this.invoiceProductService.readyInvoiceProductItemList(
      readyInvoiceProductItemsListInput
    );
  }
}
