import {
  RollsReportDetailItemTs,
  RollsReportDetailProducedItems,
} from '@/modules/invoice-product-item/dto/rolls-report-detail.dto';
import { RollsReportListInput } from '@/modules/invoice-product-item/dto/rolls-report-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { RollsReportDetailInput } from '@/modules/invoice-product-item/providers/rolls-report-detail.input';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class RollsReportProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,

    /**
     * inject productionRollService
     */
    @Inject(forwardRef(() => ProductionRollService))
    private readonly productionRollService: ProductionRollService
  ) {}

  async rollsReportList(rollsReportListInput: RollsReportListInput) {
    const { limit, offset, search } = rollsReportListInput;

    // Build the base query with minimal joins and select only needed fields
    const baseQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select([
        'ipi.id',
        'ipi.rollReferenceCode',
        'ipi.isTagPrinted',
        'ipi.productionRollId',
        'ipi.currentStatusId',
        'productionRoll.id',
        'productionRoll.rollNumber',
        'invoice.currentInvoiceStatusId',
      ])
      .innerJoin('ipi.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('ipi.productionRoll', 'productionRoll')
      .where(
        new Brackets((qb) => {
          qb.where('ipi.isTagPrinted = :isTagPrinted', {
            isTagPrinted: 1,
          }).orWhere('ipi.isTagPrinted IS NULL');
        })
      )
      .andWhere('invoice.currentInvoiceStatusId IN (:...allowedStatuses)', {
        allowedStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere('ipi.productionRollId IS NOT NULL')
      .groupBy('productionRoll.id')
      .skip(offset)
      .take(limit);

    // Add search conditions if provided
    if (search && search.length > 0) {
      const sanitizedSearch = search.replace(/\//g, '').toLowerCase();

      baseQuery.andWhere(
        new Brackets((qb) => {
          qb.where('LOWER(ipi.rollReferenceCode) LIKE :search', {
            search: `%${sanitizedSearch}%`,
          }).orWhere('LOWER(productionRoll.rollNumber) LIKE :search', {
            search: `%${sanitizedSearch}%`,
          });
        })
      );
    }
    baseQuery.addOrderBy('productionRoll.id', 'ASC');

    const [invoiceProductItems, totalCount] = await baseQuery.getManyAndCount();

    return { invoiceProductItems, totalCount };
  }

  async rollReportDetail(rollsReportDetailInput: RollsReportDetailInput) {
    const { productionRollId, limit, offset } = rollsReportDetailInput;
    let rollWeight = 0;
    let perMeterWeight = 0;
    let totalDamagedWeight = 0;
    let totalDamagedMeters = 0;
    const rollsReportDetailItems: RollsReportDetailItemTs[] = [];
    const producedData = await this.getItemsWithStatuses(
      productionRollId,
      [25, 27]
    );
    const producingData = await this.getItemsWithStatuses(
      productionRollId,
      [5, 7, 10, 15, 20]
    );
    const brokenData = await this.getItemsWithStatuses(productionRollId, [35]);
    const producedFromBrokenData = await this.getItemsWithStatuses(
      productionRollId,
      [25, 27],
      true
    );

    const total = await this.getItemsWithStatuses(
      productionRollId,
      undefined,
      undefined,
      limit,
      offset
    );

    if (total.length > 0) {
      for (const item of total) {
        const rollReportDetailItem: RollsReportDetailItemTs = {};
        rollReportDetailItem.producedCount = 0;
        rollReportDetailItem.producedFromBrokenCount = 0;
        rollReportDetailItem.producedFromBrokenArea = 0;
        rollReportDetailItem.brokenCount = 0;
        rollReportDetailItem.producingCount = 0;
        rollReportDetailItem.brokenArea = 0;
        rollReportDetailItem.producingArea = 0;
        rollReportDetailItem.producedArea = 0;

        for (const pd of producedData as RollsReportDetailProducedItems[]) {
          if (pd.sizeId === item.sizeId) {
            rollReportDetailItem.producedCount += pd.producedCount;
            rollReportDetailItem.producedArea +=
              pd.length * pd.width * pd.producedCount;
          }
        }
      }
    }

    try {
      const productionRoll = await this.productionRollService.findOne({
        where: { id: productionRollId },
      });

      if (productionRoll) {
        if (
          productionRoll.weight > 0 &&
          productionRoll.width > 0 &&
          productionRoll.length > 0
        ) {
          rollWeight = productionRoll.weight;
          perMeterWeight =
            productionRoll.weight /
            (productionRoll.width * productionRoll.length);
          const damagedProductionItems =
            await this.invoiceProductItemRepository.find({
              where: {
                productionRollId,
                currentStatusId:
                  InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION,
              },
              relations: {
                invoiceProduct: {
                  subproduct: {
                    basicCarpetSize: true,
                  },
                },
              },
            });

          for (const damagedProductionItem of damagedProductionItems) {
            const invoiceProduct = damagedProductionItem.invoiceProduct;
            const subproduct = invoiceProduct.subproduct;
            const basicCarpetSize = subproduct.basicCarpetSize;
            totalDamagedWeight +=
              perMeterWeight * (basicCarpetSize.width * basicCarpetSize.length);
            totalDamagedMeters +=
              basicCarpetSize.width * basicCarpetSize.length;
          }
        }
      }
    } catch (error) {
      throw new Error(`Error calculating roll report detail: ${error}`);
    }

    return true;
  }

  async getItemsWithStatuses(
    productionRollId: number,
    status?: number[],
    producedFromBrokenItems?: boolean,
    limit?: number,
    offset?: number
  ): Promise<RollsReportDetailProducedItems[]> {
    type RawProducedItem = {
      count: number;
      id: number;
      sizeId: number;
      title: string;
      length: number;
      width: number;
      producedCount: number;
      stateId: number;
    };

    const baseQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select([
        'COUNT(basicCarpetSize.id) as count',
        'ipi.id as id',
        'basicCarpetSize.id as sizeId',
        'basicCarpetSize.title as title',
        'basicCarpetSize.length as length',
        'basicCarpetSize.width as width',
        'COUNT(ipi.id) as producedCount',
        'ipi.currentStatusId as stateId',
      ])
      .innerJoin('ipi.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('ipi.productionRoll', 'productionRoll')
      .where('productionRoll.id = :productionRollId', { productionRollId })

      .andWhere('invoice.invoiceModeId != :excludeMode', { excludeMode: 6 })
      .groupBy('basicCarpetSize.id')
      .addGroupBy('ipi.id')
      .addGroupBy('ipi.currentStatusId');

    if (status) {
      baseQuery.andWhere('ipi.currentStatusId IN (:...allowedStatuses)', {
        allowedStatuses: status,
      });
    }

    if (producedFromBrokenItems) {
      baseQuery.andWhere('invoice.invoiceModeId = :modeId', { modeId: 6 });
    }

    if (limit) {
      baseQuery.take(limit);
    }

    if (offset) {
      baseQuery.skip(offset);
    }
    const result: RawProducedItem[] = await baseQuery.getRawMany();
    return result.map((item) => ({
      count: Number(item.count),
      id: Number(item.id),
      sizeId: Number(item.sizeId),
      title: String(item.title),
      length: Number(item.length),
      width: Number(item.width),
      producedCount: Number(item.producedCount),
      stateId: Number(item.stateId),
    }));
  }
}
