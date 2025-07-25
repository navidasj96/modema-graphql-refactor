import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceProductInput } from './dto/create-invoice-product.input';
import { UpdateInvoiceProductInput } from './dto/update-invoice-product.input';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadyInvoiceProductProvider } from '@/modules/invoice-product/providers/ready-invoice-items.provider';
import { ReadyInvoiceProductItemsListInput } from '@/modules/invoice-product/dto/ready-invoice-product-items-list.input';

@Injectable()
export class InvoiceProductService {
  constructor(
    /**
     * inject repository
     */
    @InjectRepository(InvoiceProduct)
    private readonly invoiceProductRepository: Repository<InvoiceProduct>,
    /**
     * inject readyInvoiceProductProvider
     */
    private readonly readyInvoiceProductProvider: ReadyInvoiceProductProvider
  ) {}
  create(createInvoiceProductInput: CreateInvoiceProductInput) {
    return 'This action adds a new invoiceProduct';
  }

  findAll() {
    return `This action returns all invoiceProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProduct`;
  }

  update(id: number, updateInvoiceProductInput: UpdateInvoiceProductInput) {
    return `This action updates a #${id} invoiceProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProduct`;
  }

  async save(
    invoiceProduct: InvoiceProduct,
    manager?: EntityManager
  ): Promise<InvoiceProduct> {
    const repository = manager
      ? manager.getRepository(InvoiceProduct)
      : this.invoiceProductRepository;

    return await repository.save(invoiceProduct);
  }

  async readyInvoiceProductItemList(
    readyInvoiceProductItemsListInput: ReadyInvoiceProductItemsListInput
  ) {
    return await this.readyInvoiceProductProvider.itemsList(
      readyInvoiceProductItemsListInput
    );
  }
}
