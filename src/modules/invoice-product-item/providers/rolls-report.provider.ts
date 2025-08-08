import {
  RawProductItemDto,
  RollsReportDetailData,
  RollsReportDetailItemTs,
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
        'ipi.productionRollId',
        'productionRoll.rollNumber',
        'productionRoll.id',
      ])
      .addSelect('MIN(ipi.id)', 'ipi_id')
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
      .addOrderBy('ipi_id', 'ASC')
      .addOrderBy('productionRoll.id', 'ASC')
      .skip(offset)
      .take(limit);

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

    const [invoiceProductItems, totalCount] = await baseQuery.getManyAndCount();

    return { invoiceProductItems, totalCount };
  }

  async rollReportDetail(
    rollsReportDetailInput: RollsReportDetailInput
  ): Promise<RollsReportDetailData> {
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
      for (const rowData of total) {
        const rollReportDetailItem: RollsReportDetailItemTs = {
          brokenArea: 0,
          brokenCount: 0,
          producedArea: 0,
          producedCount: 0,
          producingArea: 0,
          producingCount: 0,
          producedFromBrokenArea: 0,
          producedFromBrokenCount: 0,
          sizeTitle: rowData.title,
        };

        for (const pd of producedData) {
          if (pd.sizeId === rowData.sizeId) {
            rollReportDetailItem.producedCount += pd.count;
            rollReportDetailItem.producedArea +=
              pd.width * pd.length * pd.count;
          }
        }

        for (const ing of producingData) {
          if (ing.sizeId === rowData.sizeId) {
            rollReportDetailItem.producingCount += ing.count;
            rollReportDetailItem.producingArea +=
              ing.width * ing.length * ing.count;
          }
        }

        for (const bd of brokenData) {
          if (bd.sizeId === rowData.sizeId) {
            rollReportDetailItem.brokenCount += bd.count;
            rollReportDetailItem.brokenArea += bd.width * bd.length * bd.count;
          }
        }

        for (const fromBroken of producedFromBrokenData) {
          if (fromBroken.sizeId === rowData.sizeId) {
            rollReportDetailItem.producedFromBrokenCount += fromBroken.count;
            rollReportDetailItem.producedFromBrokenArea +=
              fromBroken.width * fromBroken.length * fromBroken.count;
          }
        }
        rollsReportDetailItems.push(rollReportDetailItem);
      }
    }
    console.log('rollsReportDetailItems', rollsReportDetailItems);
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

    return {
      perMeterWeight,
      RollsReportDetailItems: rollsReportDetailItems,
      rollWeight,
      totalDamagedMeters,
      totalDamagedWeight,
    };
  }

  async getItemsWithStatuses(
    productionRollId: number,
    status?: number[],
    producedFromBrokenItems?: boolean,
    limit?: number,
    offset?: number
  ): Promise<RawProductItemDto[]> {
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

    const result: RawProductItemDto[] = await baseQuery.getRawMany();
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
