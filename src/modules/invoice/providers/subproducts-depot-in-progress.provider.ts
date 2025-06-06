import { Repository } from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { SubproductsDepotInProgressInput } from '@/modules/invoice/dto/subproducts-depot-in-progress.input';
import { SubproductsDepotInProgressOutput } from '@/modules/invoice/dto/subproducts-depot-in-progress.output';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { PRODUCTION_IN_PROGRESS_INVOICE_STATUSES } from '@/utils/invoice-status';

@Injectable()
export class SubproductsDepotInProgressProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}

  async subproductsDepotInProgress(
    subproductsDepotInProgressInput: SubproductsDepotInProgressInput
  ): Promise<SubproductsDepotInProgressOutput> {
    const sumDepotInvoicesInProduction: Record<string, any> = {};

    const { invoiceId } = subproductsDepotInProgressInput;
    const invoice = await this.invoiceRepository.findOne({
      where: {
        id: invoiceId,
      },
      relations: {
        invoiceProducts: {
          product: { subproducts: true },
          subproduct: true,
        },
      },
    });

    if (!invoice) {
      return { subproductsDepotInProgress: {} };
    }

    for (const invoiceProduct of invoice.invoiceProducts) {
      const product = invoiceProduct.product;
      const subproduct = invoiceProduct.subproduct;
      if (product.isCarpetPad && product.isCarpetPad > 0) {
        const sumDepotInvoicesInProduction = (await this.invoiceRepository
          .createQueryBuilder('invoice')
          .leftJoin('invoice.invoiceProducts', 'invoiceProduct')
          .where('invoiceProduct.subproductId = :subproductId', {
            subproductId: subproduct.id,
          })
          .andWhere('invoice.invoiceModeId = :mode', {
            mode: InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT,
          })
          .andWhere('invoice.currentInvoiceStatusId IN (:...statuses)', {
            statuses: PRODUCTION_IN_PROGRESS_INVOICE_STATUSES,
          })
          .andWhere('invoice.id != :currentId', { currentId: invoice.id })
          .select('SUM(invoiceProduct.count)', 'sum')
          .getRawOne()) as number;
        console.log(
          'sumDepotInvoicesInProduction',
          sumDepotInvoicesInProduction
        );
        if (sumDepotInvoicesInProduction > 0) {
          sumDepotInvoicesInProduction[subproduct.id] =
            sumDepotInvoicesInProduction;
        }
      }
    }

    return { subproductsDepotInProgress: sumDepotInvoicesInProduction };
  }
}
