import {
  RawProductItemDto,
  RollsReportDetailData,
  RollsReportDetailItemTs,
} from '@/modules/invoice-product-item/dto/rolls-report-detail.dto';
import { RollsReportListInput } from '@/modules/invoice-product-item/dto/rolls-report-list.input';
import { RollsReportSepidarExportInfoOutput } from '@/modules/invoice-product-item/dto/rolls-report-sepidar-export-info.output';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { RollsReportDetailInput } from '@/modules/invoice-product-item/providers/rolls-report-detail.input';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { Brackets, DataSource, In, Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const moment = require('moment-jalaali');

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
    private readonly productionRollService: ProductionRollService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
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
        const sameSizeRow = rollsReportDetailItems.find(
          (item) => item.sizeTitle === rowData.title
        );
        const rollReportDetailItem: RollsReportDetailItemTs = sameSizeRow
          ? sameSizeRow
          : {
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
                Math.round(
                  rowData.width * rowData.length * rowData.count * 100
                ) / 100,
            };

        for (const pd of producedData) {
          if (pd.sizeId === rowData.sizeId && !sameSizeRow) {
            rollReportDetailItem.producedCount += pd.count;
            const area = pd.width * pd.length * pd.count;
            rollReportDetailItem.producedArea += Math.round(area * 100) / 100;
          }
        }

        for (const ing of producingData) {
          if (ing.sizeId === rowData.sizeId && !sameSizeRow) {
            rollReportDetailItem.producingCount += ing.count;
            const area = ing.width * ing.length * ing.count;
            rollReportDetailItem.producingArea += Math.round(area * 100) / 100;
          }
        }

        for (const bd of brokenData) {
          if (bd.sizeId === rowData.sizeId && !sameSizeRow) {
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

        if (sameSizeRow) {
          rollReportDetailItem.totalArea +=
            Math.round(rowData.width * rowData.length * rowData.count * 100) /
            100;
          rollsReportDetailItems.map((item) => {
            if (item.sizeTitle === rowData.title) {
              return sameSizeRow;
            } else {
              return item;
            }
          });
        } else {
          rollsReportDetailItems.push(rollReportDetailItem);
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
      .addGroupBy('basicCarpetSize.title')
      .addGroupBy('basicCarpetSize.length')
      .addGroupBy('basicCarpetSize.width')
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

      const results = await Promise.all([
        baseQuery.getRawMany(),
        countQuery.getRawOne(),
      ]);
      const result = results[0] as RawProductItemDto[];
      const countResult = results[1] as { count: string };

      const mappedData = result.map((item) => ({
        count: Number(item.count),
        id: 0, // Not needed for grouped data
        sizeId: Number(item.sizeId),
        title: String(item.title),
        length: Number(item.length),
        width: Number(item.width),
        producedCount: Number(item.count), // Use count as producedCount
        stateId: Number(item.stateId),
      }));

      const totalCount = Number(countResult?.count || 0);

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

  async sepidarExportInfo(
    productionRollId: number,
    partially = 0
  ): Promise<RollsReportSepidarExportInfoOutput> {
    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });

    if (!productionRoll) {
      throw new GraphQLError('Roll not found');
    }

    const rollRefCode = productionRoll.rollNumber ?? null;

    // Invoice Mode constants
    const customerModeStatus = InvoiceModeEnum.INVOICE_MODE_FOR_CUSTOMER;
    const depotModeStatus = InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT;
    const depotCancelledModeStatus =
      InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT_CANCELED;
    const defectiveModeStatus = InvoiceModeEnum.INVOICE_MODE_DAMAGED;

    const department =
      InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT;
    const defective = InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION;

    // Get invoice modes grouped by invoice mode id
    const invoiceModesQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select('ipi')
      .leftJoinAndSelect('ipi.invoiceProduct', 'invoiceProduct')
      .leftJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .leftJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .leftJoinAndSelect('invoice.invoiceMode', 'invoiceMode')
      .leftJoinAndSelect(
        'ipi.invoiceProductItemInvoiceProductStatuses',
        'invoiceProductItemInvoiceProductStatuses'
      )
      .leftJoinAndSelect(
        'invoiceProductItemInvoiceProductStatuses.invoiceProductStatus',
        'invoiceProductStatus'
      )
      .where('ipi.productionRollId = :productionRollId', { productionRollId })
      .andWhere('ipi.currentStatusId IN (:...statuses)', {
        statuses: [department, defective],
      });

    if (partially === 1) {
      invoiceModesQuery.andWhere('ipi.isInsertedIntoSepidar = :isInserted', {
        isInserted: 0,
      });
    }

    const invoiceModesResult = await invoiceModesQuery.getMany();

    // Group by invoice mode id
    const invoiceModes: Record<number, InvoiceProductItem[]> = {};
    for (const item of invoiceModesResult) {
      const modeId = item.invoiceProduct?.invoice?.invoiceMode?.id;
      if (modeId) {
        if (!invoiceModes[modeId]) {
          invoiceModes[modeId] = [];
        }
        invoiceModes[modeId].push(item);
      }
    }

    // Get invoice mode dates
    const invoiceModeDatesQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select(['DATE(ipiips.createdAt) as current_status_date', 'ipi.id'])
      .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
      .leftJoinAndSelect('ipi.invoiceProduct', 'invoiceProduct')
      .leftJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .leftJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .leftJoinAndSelect('invoice.invoiceMode', 'invoiceMode')
      .where('ipi.productionRollId = :productionRollId', { productionRollId })
      .andWhere('ipi.currentStatusId IN (:...currentStatuses)', {
        currentStatuses: [department, defective],
      })
      .andWhere('ipiips.invoiceProductStatusId IN (:...statusIds)', {
        statusIds: [department, defective],
      })
      .groupBy('DATE(ipiips.createdAt)')
      .addGroupBy('ipi.id');

    if (partially === 1) {
      invoiceModeDatesQuery.andWhere(
        'ipi.isInsertedIntoSepidar = :isInserted',
        {
          isInserted: 0,
        }
      );
    }

    const invoiceModeDates = await invoiceModeDatesQuery.getRawAndEntities();

    // Type for raw invoice mode date results
    interface InvoiceModeDateRaw {
      current_status_date: string;
      ipi_id: string;
    }

    // Process the collection data
    const collection: {
      customer: string[][];
      depot: string[][];
      depotDigikala: string[][];
      defective: string[][];
    } = {
      customer: [],
      depot: [],
      depotDigikala: [],
      defective: [],
    };

    let maxCount = 0;
    let i = 0;

    for (const invoiceModeDate of invoiceModeDates.raw as InvoiceModeDateRaw[]) {
      const dateToExport = invoiceModeDate.current_status_date;

      const depotItems = invoiceModes[depotModeStatus] || [];
      const depotCanceledItems = invoiceModes[depotCancelledModeStatus] || [];
      const customerItems = invoiceModes[customerModeStatus] || [];
      const defectiveItems = invoiceModes[defectiveModeStatus] || [];

      collection.customer[i] = await this.getCustomer(
        customerItems,
        dateToExport
      );
      collection.depot[i] = await this.getDepot(
        depotItems,
        depotCanceledItems,
        dateToExport
      );
      collection.depotDigikala[i] = await this.getDepotDigikala(
        depotItems,
        dateToExport
      );
      collection.defective[i] = await this.getDefective(
        defectiveItems,
        dateToExport
      );

      maxCount = Math.max(
        maxCount,
        collection.customer[i].length,
        collection.depot[i].length,
        collection.defective[i].length,
        collection.depotDigikala[i].length
      );
      i++;
    }

    // Export data processing - Final version
    const dataToExport: (string | null)[][] = [];
    let counter = 0;

    while (counter < maxCount) {
      const arrayToPush: (string | null)[] = [];
      i = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of invoiceModeDates.raw as InvoiceModeDateRaw[]) {
        const customer = collection.customer[i]?.[counter] || null;
        const depot = collection.depot[i]?.[counter] || null;
        const defective = collection.defective[i]?.[counter] || null;
        const depotDigikala = collection.depotDigikala[i]?.[counter] || null;

        arrayToPush.push(customer);
        arrayToPush.push(depot);
        arrayToPush.push(defective);
        arrayToPush.push(depotDigikala);
        i++;
      }

      dataToExport.push(arrayToPush);
      counter++;
    }

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      collection,
    };
  }

  // Helper method to format date in Jalali format
  private formatJalaliDate(date: string): string {
    try {
      // Convert Gregorian date to Jalali
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const jalaliDate = moment(date).format('jYYYY/jMM/jDD');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return jalaliDate;
    } catch {
      // Fallback to original date if conversion fails
      return date;
    }
  }

  // Helper methods implementation
  private async getCustomer(
    customerItems: InvoiceProductItem[],
    dateToExport: string
  ): Promise<string[]> {
    const arr: string[] = [];

    // Format date in Jalali format
    const jalaliDate = this.formatJalaliDate(dateToExport);
    arr.push(`مشتری ${jalaliDate}`);

    interface StatusDateResult {
      statusDate: string;
    }

    for (const invoiceProductItem of customerItems) {
      // Get current status with pivot date
      const currentStatus = (await this.invoiceProductItemRepository
        .createQueryBuilder('ipi')
        .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
        .where('ipi.id = :itemId', { itemId: invoiceProductItem.id })
        .andWhere('ipiips.invoiceProductStatusId = :statusId', {
          statusId: invoiceProductItem.currentStatusId,
        })
        .select(['DATE(ipiips.createdAt) as statusDate'])
        .getRawOne()) as StatusDateResult | null;

      // Convert both dates to YYYY-MM-DD format for comparison
      const currentStatusDate = currentStatus?.statusDate
        ? new Date(currentStatus.statusDate).toISOString().split('T')[0]
        : null;
      const exportDate = new Date(dateToExport).toISOString().split('T')[0];

      if (currentStatus && currentStatusDate === exportDate) {
        const subProduct = invoiceProductItem.invoiceProduct?.subproduct;
        if (subProduct?.code) {
          arr.push(subProduct.code);
        }
      }
    }

    return arr;
  }

  private async getDepot(
    depotItems: InvoiceProductItem[],
    depotCanceledItems: InvoiceProductItem[],
    dateToExport: string
  ): Promise<string[]> {
    const arr: string[] = [];

    // Format date in Jalali format
    const jalaliDate = this.formatJalaliDate(dateToExport);
    arr.push(`دپو ${jalaliDate}`);

    interface StatusDateResult {
      statusDate: string;
    }

    // Process depot items
    for (const invoiceProductItem of depotItems) {
      const invoice = invoiceProductItem.invoiceProduct?.invoice;

      // Skip if for_digikala is true
      if (!invoice?.forDigikala) {
        const currentStatus = (await this.invoiceProductItemRepository
          .createQueryBuilder('ipi')
          .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
          .where('ipi.id = :itemId', { itemId: invoiceProductItem.id })
          .andWhere('ipiips.invoiceProductStatusId = :statusId', {
            statusId: invoiceProductItem.currentStatusId,
          })
          .select(['DATE(ipiips.createdAt) as statusDate'])
          .getRawOne()) as StatusDateResult | null;

        // Convert both dates to YYYY-MM-DD format for comparison
        const currentStatusDate = currentStatus?.statusDate
          ? new Date(currentStatus.statusDate).toISOString().split('T')[0]
          : null;
        const exportDate = new Date(dateToExport).toISOString().split('T')[0];

        if (currentStatus && currentStatusDate === exportDate) {
          const subProduct = invoiceProductItem.invoiceProduct?.subproduct;
          if (subProduct?.code) {
            arr.push(subProduct.code);
          }
        }
      }
    }

    // Process depot canceled items
    for (const invoiceProductItem of depotCanceledItems) {
      const invoice = invoiceProductItem.invoiceProduct?.invoice;

      // Skip if for_digikala is true
      if (!invoice?.forDigikala) {
        const currentStatus = (await this.invoiceProductItemRepository
          .createQueryBuilder('ipi')
          .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
          .where('ipi.id = :itemId', { itemId: invoiceProductItem.id })
          .andWhere('ipiips.invoiceProductStatusId = :statusId', {
            statusId: invoiceProductItem.currentStatusId,
          })
          .select(['DATE(ipiips.createdAt) as statusDate'])
          .getRawOne()) as StatusDateResult | null;

        // Convert both dates to YYYY-MM-DD format for comparison
        const currentStatusDate = currentStatus?.statusDate
          ? new Date(currentStatus.statusDate).toISOString().split('T')[0]
          : null;
        const exportDate = new Date(dateToExport).toISOString().split('T')[0];

        if (currentStatus && currentStatusDate === exportDate) {
          const subProduct = invoiceProductItem.invoiceProduct?.subproduct;
          if (subProduct?.code) {
            arr.push(subProduct.code);
          }
        }
      }
    }

    return arr;
  }

  private async getDepotDigikala(
    depotItems: InvoiceProductItem[],
    dateToExport: string
  ): Promise<string[]> {
    const arr: string[] = [];

    // Format date in Jalali format
    const jalaliDate = this.formatJalaliDate(dateToExport);
    arr.push(`دپوی دیجی کالا ${jalaliDate}`);

    interface StatusDateResult {
      statusDate: string;
    }

    for (const invoiceProductItem of depotItems) {
      const invoice = invoiceProductItem.invoiceProduct?.invoice;

      // Only process if for_digikala is true
      if (invoice?.forDigikala) {
        const currentStatus = (await this.invoiceProductItemRepository
          .createQueryBuilder('ipi')
          .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
          .where('ipi.id = :itemId', { itemId: invoiceProductItem.id })
          .andWhere('ipiips.invoiceProductStatusId = :statusId', {
            statusId: invoiceProductItem.currentStatusId,
          })
          .select(['DATE(ipiips.createdAt) as statusDate'])
          .getRawOne()) as StatusDateResult | null;

        // Convert both dates to YYYY-MM-DD format for comparison
        const currentStatusDate = currentStatus?.statusDate
          ? new Date(currentStatus.statusDate).toISOString().split('T')[0]
          : null;
        const exportDate = new Date(dateToExport).toISOString().split('T')[0];

        if (currentStatus && currentStatusDate === exportDate) {
          const subProduct = invoiceProductItem.invoiceProduct?.subproduct;
          if (subProduct?.code) {
            arr.push(subProduct.code);
          }
        }
      }
    }

    return arr;
  }

  private async getDefective(
    defectiveItems: InvoiceProductItem[],
    dateToExport: string
  ): Promise<string[]> {
    const arr: string[] = [];

    // Format date in Jalali format
    const jalaliDate = this.formatJalaliDate(dateToExport);
    arr.push(`معیوب ${jalaliDate}`);

    interface StatusDateResult {
      statusDate: string;
    }

    for (const invoiceProductItem of defectiveItems) {
      const currentStatus = (await this.invoiceProductItemRepository
        .createQueryBuilder('ipi')
        .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipiips')
        .where('ipi.id = :itemId', { itemId: invoiceProductItem.id })
        .andWhere('ipiips.invoiceProductStatusId = :statusId', {
          statusId: invoiceProductItem.currentStatusId,
        })
        .select(['DATE(ipiips.createdAt) as statusDate'])
        .getRawOne()) as StatusDateResult | null;

      // Convert both dates to YYYY-MM-DD format for comparison
      const currentStatusDate = currentStatus?.statusDate
        ? new Date(currentStatus.statusDate).toISOString().split('T')[0]
        : null;
      const exportDate = new Date(dateToExport).toISOString().split('T')[0];

      if (currentStatus && currentStatusDate === exportDate) {
        const subProduct = invoiceProductItem.invoiceProduct?.subproduct;
        if (subProduct?.code) {
          arr.push(subProduct.code);
        }
      }
    }

    return arr;
  }

  async confirmSepidarPartiallyImportedFromExcel(productionRollId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);
    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });

    const rollRefCode = productionRoll?.rollNumber;

    const department =
      InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT;
    const defective = InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION;

    const InvoiceProductItems = await invoiceProductItemRepository.find({
      where: {
        productionRollId,
        currentStatusId: In([department, defective]),
        isInsertedIntoSepidar: 0,
      },
      relations: {
        invoiceProduct: {
          subproduct: true,
          invoice: {
            invoiceMode: true,
          },
        },
      },
    });

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const invoiceProductItem of InvoiceProductItems) {
        invoiceProductItem.isInsertedIntoSepidar = 1;
        await invoiceProductItemRepository.save(invoiceProductItem);
      }
      await queryRunner.commitTransaction();
    } catch {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(
        `Error confirming Sepidar import for roll ${rollRefCode}`
      );
    } finally {
      await queryRunner.release();
    }
  }
}
