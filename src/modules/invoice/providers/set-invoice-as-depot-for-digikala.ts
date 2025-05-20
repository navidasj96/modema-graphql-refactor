import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class SetInvoiceAsDepotForDigikalaProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}

  public async setInvoiceAsDepotForDigikala(ids: String[]) {
    const invoiceIds = ids.map((id) => Number(id));
    const invoices = await this.invoiceRepository.find({
      where: {
        id: In(invoiceIds),
      },
      relations: [
        'invoiceAddresses',
        'invoiceAddresses.state',
        'invoiceAddresses.city',
        'invoiceProducts',
        'invoiceProducts.product',
        'invoiceProducts.subproduct',
        'invoiceProducts.subproduct.basicCarpetSize',
        'visitor',
      ],
    });

    for (const invoice of invoices) {
      if (invoice.isDepot) {
        invoice.forDigikala = true;
        await this.invoiceRepository.save(invoice);
      } else {
        throw new Error(
          `صورتحساب های انتخابی باید از نوع دپو باشند. شماره صورتحساب: ${invoice.invoiceNumber}`
        );
      }
    }

    return invoices;
  }
}
