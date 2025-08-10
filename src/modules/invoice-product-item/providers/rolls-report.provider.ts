import {
  RawProductItemDto,
  RollsReportDetailData,
  RollsReportDetailItemTs,
} from '@/modules/invoice-product-item/dto/rolls-report-detail.dto';
import { RollsReportListInput } from '@/modules/invoice-product-item/dto/rolls-report-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { RollsReportDetailInput } from '@/modules/invoice-product-item/providers/rolls-report-detail.input';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
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

    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
      select: ['rollNumber'],
    });
    const producedDataResult = await this.getItemsWithStatuses(
      productionRollId,
      [25, 27]
    );
    const producingDataResult = await this.getItemsWithStatuses(
      productionRollId,
      [5, 7, 10, 15, 20]
    );
    const brokenDataResult = await this.getItemsWithStatuses(productionRollId, [
      35,
    ]);
    const producedFromBrokenDataResult = await this.getItemsWithStatuses(
      productionRollId,
      [25, 27],
      true
    );

    const totalResult = await this.getItemsWithStatuses(
      productionRollId,
      undefined,
      undefined,
      limit,
      offset
    );

    // Extract data arrays from the results
    const producedData = producedDataResult.data;
    const producingData = producingDataResult.data;
    const brokenData = brokenDataResult.data;
    const producedFromBrokenData = producedFromBrokenDataResult.data;
    const total = totalResult.data;

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
          totalArea:
            Math.round(rowData.width * rowData.length * rowData.count * 100) /
            100,
        };
        console.log('rowData.count', rowData.count);
        for (const pd of producedData) {
          if (pd.sizeId === rowData.sizeId) {
            rollReportDetailItem.producedCount += pd.count;
            const area = pd.width * pd.length * pd.count;
            rollReportDetailItem.producedArea += Math.round(area * 100) / 100;
          }
        }

        for (const ing of producingData) {
          if (ing.sizeId === rowData.sizeId) {
            rollReportDetailItem.producingCount += ing.count;
            const area = ing.width * ing.length * ing.count;
            rollReportDetailItem.producingArea += Math.round(area * 100) / 100;
          }
        }

        for (const bd of brokenData) {
          if (bd.sizeId === rowData.sizeId) {
            rollReportDetailItem.brokenCount += bd.count;
            const area = bd.width * bd.length * bd.count;
            rollReportDetailItem.brokenArea += Math.round(area * 100) / 100;
          }
        }

        for (const fromBroken of producedFromBrokenData) {
          if (fromBroken.sizeId === rowData.sizeId) {
            rollReportDetailItem.producedFromBrokenCount += fromBroken.count;
            const area =
              fromBroken.width * fromBroken.length * fromBroken.count;
            rollReportDetailItem.producedFromBrokenArea +=
              Math.round(area * 100) / 100;
          }
        }
        rollsReportDetailItems.push(rollReportDetailItem);
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

    return {
      perMeterWeight,
      RollsReportDetailItems: rollsReportDetailItems,
      rollWeight,
      totalDamagedMeters,
      totalDamagedWeight,
      rollNumber: productionRoll?.rollNumber || '',
      totalCount: totalResult.totalCount || 1,
    };
  }

  async getItemsWithStatuses(
    productionRollId: number,
    status?: number[],
    producedFromBrokenItems?: boolean,
    limit?: number,
    offset?: number
  ): Promise<{ data: RawProductItemDto[]; totalCount?: number }> {
    const baseQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select([
        'COUNT(ipi.id) as count',
        'basicCarpetSize.id as sizeId',
        'basicCarpetSize.title as title',
        'basicCarpetSize.length as length',
        'basicCarpetSize.width as width',
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

    // If limit or offset is provided, calculate total count
    if (limit || offset) {
      // Create a separate count query without select, groupBy, limit, and offset for accurate count
      const countQuery = this.invoiceProductItemRepository
        .createQueryBuilder('ipi')
        .select('COUNT(DISTINCT basicCarpetSize.id)', 'totalCount')
        .innerJoin('ipi.invoiceProduct', 'invoiceProduct')
        .innerJoin('invoiceProduct.invoice', 'invoice')
        .innerJoin('invoiceProduct.subproduct', 'subproduct')
        .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
        .innerJoin('ipi.productionRoll', 'productionRoll')
        .where('productionRoll.id = :productionRollId', { productionRollId })
        .andWhere('invoice.invoiceModeId != :excludeMode', { excludeMode: 6 });

      if (status) {
        countQuery.andWhere('ipi.currentStatusId IN (:...allowedStatuses)', {
          allowedStatuses: status,
        });
      }

      if (producedFromBrokenItems) {
        countQuery.andWhere('invoice.invoiceModeId = :modeId', { modeId: 6 });
      }

      const [result, countResult] = await Promise.all([
        baseQuery.getRawMany(),
        countQuery.getRawOne(),
      ]);

      const mappedData = (result as RawProductItemDto[]).map((item) => ({
        count: Number(item.count),
        id: 0, // Not needed for grouped data
        sizeId: Number(item.sizeId),
        title: String(item.title),
        length: Number(item.length),
        width: Number(item.width),
        producedCount: Number(item.count), // Use count as producedCount
        stateId: Number(item.stateId),
      }));

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const totalCount = Number(countResult?.['totalCount'] || 0);

      return { data: mappedData, totalCount };
    }

    // Otherwise, just get the data without count
    const result = await baseQuery.getRawMany();
    const mappedData = (result as RawProductItemDto[]).map((item) => ({
      count: Number(item.count),
      id: 0, // Not needed for grouped data
      sizeId: Number(item.sizeId),
      title: String(item.title),
      length: Number(item.length),
      width: Number(item.width),
      producedCount: Number(item.count), // Use count as producedCount
      stateId: Number(item.stateId),
    }));

    return { data: mappedData };
  }

  async sepidarExportInfo(productionRollId: number, partially = 0) {
    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });

    if (!productionRoll) {
      throw new GraphQLError('Roll not found');
    }

    const customerModeStatus = InvoiceModeEnum.INVOICE_MODE_FOR_CUSTOMER;
    const depotModeStatus = InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT;
    const depotCancelledModeStatus =
      InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT_CANCELED;
    const defectiveModeStatus = InvoiceModeEnum.INVOICE_MODE_DAMAGED;

    const department =
      InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT;
    const defective = InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION;

    const invoiceModes = await this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')
      .leftJoinAndSelect('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .leftJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .leftJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .leftJoinAndSelect('invoice.invoiceMode', 'invoiceMode')
      .leftJoinAndSelect(
        'invoiceProductItem.invoiceProductStatuses',
        'invoiceProductStatuses'
      )
      .where('invoiceProductItem.productionRollId = :productionRollId', {
        productionRollId,
      })
      .andWhere('invoiceProductItem.currentStatusId IN (:...statuses)', {
        statuses: [department, defective],
      })
      .getMany();

    if (partially == 1) {
      $invoiceModes;
    }
  }
}
