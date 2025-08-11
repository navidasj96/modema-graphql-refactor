import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { ChangeInvoicesStatusInput } from '@/modules/invoice/dto/change-invoices-status.input';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { ReportPadsToProduceInput } from '@/modules/invoice/dto/report-pads-to-produce.input';
import { ReportSentInvoicesInput } from '@/modules/invoice/dto/report-sent-invoices.input';
import { ShowInvoiceInputDto } from '@/modules/invoice/dto/show-invoice.input.dto';
import { SubproductsDepotInProgressInput } from '@/modules/invoice/dto/subproducts-depot-in-progress.input';
import { SubproductsDepotInProgressOutput } from '@/modules/invoice/dto/subproducts-depot-in-progress.output';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { CheckSimilarInvoiceWithNameProvider } from '@/modules/invoice/providers/check-similar-invoice-with-name.provider';
import { FillInvoicePackageCountIfEmptyProvider } from '@/modules/invoice/providers/fill-invoice-package-count-if-empty.provider';
import { GetNewInvoiceNumberProvider } from '@/modules/invoice/providers/get-new-invoice-number.provider';
import { ReportPadsToProduceProvider } from '@/modules/invoice/providers/report-pads-to-produce.provider';
import { ReportSentInvoicesProvider } from '@/modules/invoice/providers/report-sent-invoices.provider';
import { SetInvoiceAsDepotForDigikalaProvider } from '@/modules/invoice/providers/set-invoice-as-depot-for-digikala';
import { ShowInvoiceProvider } from '@/modules/invoice/providers/show-invoice-provider';
import { SubproductsDepotInProgressProvider } from '@/modules/invoice/providers/subproducts-depot-in-progress.provider';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { ChangeInvoiceStatusProvider } from './providers/change-invoices-status.provider';

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
    private readonly showInvoiceProvider: ShowInvoiceProvider,
    /**
     * inject subproductsDepotInProgressProvider
     */
    private readonly subproductsDepotInProgressProvider: SubproductsDepotInProgressProvider,
    /**
     * inject getNewInvoiceNumberProvider
     */ private readonly getNewInvoiceNumberProvider: GetNewInvoiceNumberProvider,
    /**
     * inject reportPadsToProduceProvider
     */
    private readonly reportPadsToProduceProvider: ReportPadsToProduceProvider,
    /**
     * inject ReportSentInvoicesProvider
     */
    private readonly reportSentInvoicesProvider: ReportSentInvoicesProvider
  ) {}

  create(createInvoiceInput: CreateInvoiceInput) {
    return 'This action adds a new invoice';
  }

  findAll() {
    return `This action returns all invoice`;
  }

  async find(options: FindOneOptions<Invoice>) {
    return await this.invoiceRepository.find(options);
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

  async subproductsDepotInProgress(
    subproductsDepotInProgressInput: SubproductsDepotInProgressInput
  ): Promise<SubproductsDepotInProgressOutput> {
    return await this.subproductsDepotInProgressProvider.subproductsDepotInProgress(
      subproductsDepotInProgressInput
    );
  }

  async save(invoice: Invoice, manager?: EntityManager) {
    const repository = manager
      ? manager.getRepository(Invoice)
      : this.invoiceRepository;
    return await repository.save(invoice);
  }

  async getNewInvoiceNumber(invoiceId = 0) {
    return await this.getNewInvoiceNumberProvider.getNewInvoiceNumber(
      invoiceId
    );
  }

  async reportPadsToProduceList(
    reportPadsToProduceInput: ReportPadsToProduceInput
  ) {
    return await this.reportPadsToProduceProvider.reportPadsToProduceList(
      reportPadsToProduceInput
    );
  }

  async reportSentInvoicesList(
    reportSentInvoicesInput: ReportSentInvoicesInput
  ) {
    return await this.reportSentInvoicesProvider.reportSentInvoicesList(
      reportSentInvoicesInput
    );
  }
  async readyOnlyPads(fromData?: string, toDate?: string) {
    const readyOnlyPadsInvoicesQuery = this.invoiceRepository
      .createQueryBuilder('invoice')
      .innerJoinAndSelect('invoice.invoiceAddresses', 'invoiceAddress')
      .innerJoinAndSelect('invoice.invoiceProducts', 'invoiceProduct')
      .innerJoinAndSelect('invoiceProduct.product', 'product')
      .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .where('invoice.currentInvoiceStatusId IN (:...statusIds)', {
        statusIds: [InvoiceStatusEnum.PRODUCTION_COMPLETED],
      })
      .andWhere('invoice.containsPadsOnly = :containsPadsOnly', {
        containsPadsOnly: true,
      });

    if (fromData) {
      const startDate = new Date(fromData);
      readyOnlyPadsInvoicesQuery.andWhere('invoice.issueDate >= :fromData', {
        fromData: startDate,
      });
    }

    if (toDate) {
      const endDate = new Date(toDate);
      readyOnlyPadsInvoicesQuery.andWhere('invoice.issueDate <= :toDate', {
        toDate: endDate,
      });
    }

    const readyOnlyPadsInvoices = await readyOnlyPadsInvoicesQuery.getMany();

    return readyOnlyPadsInvoices;
  }
}
