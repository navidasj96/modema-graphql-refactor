import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { InvoiceStatusService } from '@/modules/invoice-status/invoice-status.service';
import { ReportPadsToProduceInput } from '@/modules/invoice/dto/report-pads-to-produce.input';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { PRODUCTION_IN_PROGRESS_INVOICE_STATUSES } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class ReportPadsToProduceProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,

    /**
     * inject invoiceStatusService
     */
    private readonly invoiceStatusService: InvoiceStatusService,
    /**
     * inject basicCarpetSizeService
     */
    private readonly basicCarpetSizeService: BasicCarpetSizeService
  ) {}

  async reportPadsToProduceList(
    reportPadsToProduceInput: ReportPadsToProduceInput
  ) {
    type invoiceType = {
      size_id: number;
      title: string;
      status_id: number;
      status: string;
      sum: number;
    };
    type finalRowType = {
      size_id: number;
      size_title: string;
      total: number;
      statuses: { key: string; value: number }[];
    };
    const { fromDate, toDate } = reportPadsToProduceInput;
    const productionInProgressStatuses = await this.invoiceStatusService.find({
      where: { id: In([PRODUCTION_IN_PROGRESS_INVOICE_STATUSES]) },
      select: ['id', 'status'],
    });

    const sizes = await this.basicCarpetSizeService.find({
      where: { isActive: 1 },
      select: ['id', 'title'],
    });

    const invoiceBaseQuery = this.invoiceRepository
      .createQueryBuilder('invoice')
      .select([
        'basicCarpetSize.id AS size_id',
        'basicCarpetSize.title AS title',
        'invoiceStatus.id AS status_id',
        'invoiceStatus.status AS status',
        'SUM(invoiceProduct.count) AS sum',
      ])
      .innerJoin('invoice.invoiceProducts', 'invoiceProduct')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('invoice.currentInvoiceStatus', 'invoiceStatus')
      .where('invoiceStatus.id IN (:...statusIds)', {
        statusIds: PRODUCTION_IN_PROGRESS_INVOICE_STATUSES,
      })
      .andWhere('product.isCarpetPad = :isPad', { isPad: 0 })
      .andWhere('invoiceProduct.withPad = :withPad', { withPad: 1 })
      .andWhere('invoice.userId NOT IN (:...excludedUserIds)', {
        excludedUserIds: [1574865, 1784744, 2431347],
      })
      .groupBy('basicCarpetSize.id')
      .addGroupBy('invoiceStatus.id');

    if (fromDate) {
      invoiceBaseQuery.andWhere('invoice.issueDate >= :fromDate', {
        fromDate: fromDate,
      });
    }
    if (toDate) {
      invoiceBaseQuery.andWhere('invoice.issueDate <= :toDate', {
        toDate: toDate,
      });
    }
    const result: invoiceType[] = await invoiceBaseQuery.getRawMany();

    const finalResults: finalRowType[] = [];

    for (const size of sizes) {
      const sizeId = size.id;
      // Initialize the result object for this size
      const resultRow: {
        size_id: number;
        size_title: string;
        total: number;
        [key: string]: number | string;
      } = {
        size_id: sizeId,
        size_title: size.title,
        total: 0,
      };

      // Initialize all statuses to 0
      for (const status of productionInProgressStatuses) {
        resultRow[`status_${status.id}`] = 0;
      }

      // Fill in values from the query result
      for (const invoice of result) {
        if (invoice.size_id === sizeId) {
          const statusKey = `status_${invoice.status_id}`;
          const sum = Number(invoice.sum) || 0;
          resultRow[statusKey] = sum;
          resultRow.total += sum;
        }
      }
      const statuses = Object.entries(resultRow)
        .filter(([k]) => k.startsWith('status_'))
        .map(([key, value]) => ({ key, value: Number(value) }));

      finalResults.push({
        size_id: resultRow.size_id,
        size_title: resultRow.size_title,
        total: resultRow.total,
        statuses,
      } as finalRowType);
    }

    return finalResults;
  }
}
