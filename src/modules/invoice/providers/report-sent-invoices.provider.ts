import { ReportSentInvoicesInput } from '@/modules/invoice/dto/report-sent-invoices.input';
import { ReportSentInvoicesOutput } from '@/modules/invoice/dto/report-sent-invoices.output';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ShippingServiceService } from '@/modules/shipping-service/shipping-service.service';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportSentInvoicesProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    /**
     * inject shippingServiceService
     */
    private readonly shippingServiceService: ShippingServiceService
  ) {}

  async reportSentInvoicesList(
    reportSentInvoicesInput: ReportSentInvoicesInput
  ) {
    const { fromDate, toDate } = reportSentInvoicesInput;
    const finalResult: ReportSentInvoicesOutput = {
      sentInvoices: 0,
      shippingTypes: [],
      totalBoxCount: 0,
      totalCarpetArea: 0,
      totalPadArea: 0,
      totalSentMeter: 0,
    };
    const shippingServices = await this.shippingServiceService.findAll({});

    const sentInvoices = await this.invoiceRepository
      .createQueryBuilder('invoice')
      .select('invoice')
      .innerJoinAndSelect('invoice.invoiceProducts', 'invoiceProduct')
      .innerJoinAndSelect('invoiceProduct.product', 'product')
      .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .innerJoinAndSelect('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('invoice.invoiceInvoiceStatuses', 'iis')
      .where('iis.invoiceStatusId = :sentStatus', {
        sentStatus: InvoiceStatusEnum.SENT,
      })
      .andWhere('iis.createdAt >= :fromDate', { fromDate })
      .andWhere('iis.createdAt <= :toDate', { toDate })
      .groupBy('invoice.id')
      .getMany();

    finalResult.sentInvoices = sentInvoices.length;
    finalResult.totalBoxCount = sentInvoices.reduce(
      (acc, invoice) => acc + (invoice.packageCount || 0),
      0
    );

    let totalCarpetArea = 0;
    let totalPadArea = 0;
    for (const invoice of sentInvoices) {
      for (const invoiceProduct of invoice.invoiceProducts) {
        const count = invoiceProduct.count;
        const product = invoiceProduct.product;
        const subproduct = invoiceProduct.subproduct;
        const basicCarpetSize = subproduct.basicCarpetSize;

        if (product.isCarpetPad) {
          totalPadArea +=
            basicCarpetSize.width * basicCarpetSize.length * count;
        } else {
          totalCarpetArea +=
            basicCarpetSize.width * basicCarpetSize.length * count;
        }
      }
    }
    finalResult.totalCarpetArea = Math.round(totalCarpetArea * 100) / 100;
    finalResult.totalPadArea = Math.round(totalPadArea * 100) / 100;
    finalResult.totalSentMeter =
      Math.round(totalCarpetArea * 100) / 100 +
      Math.round(totalPadArea * 100) / 100;

    const usedShippingServices: Record<
      number,
      { id: number; name: string; count: number }
    > = {};

    for (const shippingService of shippingServices) {
      const shippingServiceId = shippingService.id;
      if (!usedShippingServices[shippingServiceId]) {
        usedShippingServices[shippingServiceId] = {
          id: shippingServiceId,
          name: shippingService.name || '',
          count: 0,
        };
      }
      // Count how many invoices used this shipping service
      const currentShippingServiceCount = sentInvoices.filter(
        (invoice) => invoice.selectedShippingServiceId === shippingServiceId
      ).length;

      usedShippingServices[shippingServiceId].count +=
        currentShippingServiceCount;
    }

    const results: { key: string; value: number }[] = [];

    for (const usedShippingService of Object.values(usedShippingServices)) {
      // If you want to skip zero-count, uncomment the next line:
      // if (!usedShippingService.count) continue;
      results.push({
        key: `تعداد سفارش ارسال شده با ${usedShippingService.name}`,
        value: usedShippingService.count,
      });
    }

    // Now you can assign results to finalResult.shippingTypes or return it as needed
    finalResult.shippingTypes = results;

    return finalResult;
  }
}
