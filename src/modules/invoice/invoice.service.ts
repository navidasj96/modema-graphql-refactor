import { Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CheckSimilarInvoiceWithNameProvider } from '@/modules/invoice/providers/check-similar-invoice-with-name.provider';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { SetInvoiceAsDepotForDigikalaProvider } from '@/modules/invoice/providers/set-invoice-as-depot-for-digikala';
import { ChangeInvoiceStatusProvider } from './providers/change-invoices-status.provider';
import { ChangeInvoicesStatusInput } from '@/modules/invoice/dto/change-invoices-status.input';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { FillInvoicePackageCountIfEmptyProvider } from '@/modules/invoice/providers/fill-invoice-package-count-if-empty.provider';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { ShowInvoiceProvider } from '@/modules/invoice/providers/show-invoice-provider';
import { ShowInvoiceInputDto } from '@/modules/invoice/dto/show-invoice.input.dto';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly checkSimilarInvoiceWithNameProvider: CheckSimilarInvoiceWithNameProvider,
    /**
     * inject setInvoiceAsDepotForDigikalaProvider
     */
    private readonly setInvoiceAsDepotForDigikalaProvider: SetInvoiceAsDepotForDigikalaProvider,
    /**
     * inject changeInvoiceStatusProvider
     */
    private readonly changeInvoiceStatusProvider: ChangeInvoiceStatusProvider,
    /**
     * inject fillInvoicePackageCountIfEmpty
     */
    private readonly fillInvoicePackageCountIfEmptyProvider: FillInvoicePackageCountIfEmptyProvider,
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    /**
     * inject showInvoiceProvider
     */
    private readonly showInvoiceProvider: ShowInvoiceProvider
  ) {}

  create(createInvoiceInput: CreateInvoiceInput) {
    return 'This action adds a new invoice';
  }

  findAll() {
    return `This action returns all invoice`;
  }

  async findOne(options: FindOneOptions<Invoice>) {
    return await this.invoiceRepository.findOne(options);
  }

  update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }

  async checkSimilarInvoiceWithName(
    userInfo: CheckSimilarInvoiceWithNameInput[]
  ) {
    return await this.checkSimilarInvoiceWithNameProvider.checkSimilarInvoiceWithName(
      userInfo
    );
  }

  async setInvoiceAsDepotForDigikala(ids: string[]) {
    return await this.setInvoiceAsDepotForDigikalaProvider.setInvoiceAsDepotForDigikala(
      ids
    );
  }

  async changeInvoiceStatus(
    changeInvoicesStatusInput: ChangeInvoicesStatusInput,
    context: { req: UserContext }
  ) {
    return await this.changeInvoiceStatusProvider.updateInvoiceStatus(
      changeInvoicesStatusInput,
      context
    );
  }

  async fillInvoicePackageCountIfEmpty(invoice: Invoice) {
    return await this.fillInvoicePackageCountIfEmptyProvider.fillInvoicePackageCountIfEmpty(
      invoice
    );
  }

  async showInvoice(
    showInvoiceInputDto: ShowInvoiceInputDto,
    context: { req: UserContext }
  ) {
    return await this.showInvoiceProvider.showInvoice(
      showInvoiceInputDto,
      context
    );
  }
}
