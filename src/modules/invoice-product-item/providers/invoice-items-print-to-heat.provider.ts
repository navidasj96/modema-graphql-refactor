import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { InvoiceItemsPrintToHeatListInput } from '@/modules/invoice-product-item/dto/invoice-items-print-to-heat-list.input';
import { MoveBackInvoiceItemToRipInput } from '@/modules/invoice-product-item/dto/move-back-invoice-item-to-rip.input';
import { UpdateInvoiceProductItemPrintToHeatInput } from '@/modules/invoice-product-item/dto/update-invoice-product-item-print-to-heat.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { PrintProfileService } from '@/modules/print-profile/print-profile.service';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import * as moment from 'moment-jalaali';

@Injectable()
export class InvoiceItemsPrintToHeatProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject invoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
    /**
     * inject printProfileService
     */
    private readonly printProfileService: PrintProfileService,
    /**
     * inject productionRollService
     */
    private readonly productionRollService: ProductionRollService
  ) {}

  async invoiceItemsPrintToHeatList(
    invoiceItemsPrintToHeatListInput: InvoiceItemsPrintToHeatListInput
  ) {
    const { printRipId, productionRollId } = invoiceItemsPrintToHeatListInput;

    let heatItems: InvoiceProductItem[] = [];
    let ripItems: InvoiceProductItem[] = [];

    if (printRipId) {
      const invoiceProductRipItems = await this.invoiceProductItemRepository
        .createQueryBuilder('invoiceProductItem')
        .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
        .innerJoin('invoiceProduct.invoice', 'invoice')
        .innerJoin('invoiceProduct.product', 'product')
        .where('invoice.currentInvoiceStatusId IN (:...statuses)', {
          statuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
        })
        .andWhere('invoiceProductItem.currentStatusId = :currentStatus', {
          currentStatus: InvoiceProductStatusEnum.PRINT,
        })
        .andWhere('invoiceProductItem.printRipId = :printRipId', {
          printRipId,
        })
        .andWhere('product.isShaggy = :isShaggy', { isShaggy: 0 })
        .orderBy('invoiceProductItem.sortOrder', 'ASC')
        .addOrderBy('invoiceProductItem.id', 'ASC')
        .getMany();

      ripItems = invoiceProductRipItems;
    }

    if (productionRollId) {
      const invoiceProductHeatItems = await this.invoiceProductItemRepository
        .createQueryBuilder('invoiceProductItem')
        .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
        .innerJoin('invoiceProduct.invoice', 'invoice')
        .innerJoin('invoiceProduct.product', 'product')
        .where('invoice.currentInvoiceStatusId IN (:...statuses)', {
          statuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
        })
        .andWhere('invoiceProductItem.currentStatusId = :currentStatus', {
          currentStatus: InvoiceProductStatusEnum.HEAT,
        })
        .andWhere('invoiceProductItem.productionRollId = :productionRollId', {
          productionRollId,
        })
        .andWhere('product.isShaggy = :isShaggy', { isShaggy: 0 })
        .orderBy('invoiceProductItem.tagSortOrder', 'ASC')
        .getMany();
      heatItems = invoiceProductHeatItems;
    }

    return {
      ripItems,
      heatItems,
    };
  }

  async moveBackInvoiceItemToRip(
    context: { req: UserContext },
    moveBackInvoiceItemToRipInput: MoveBackInvoiceItemToRipInput
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;
    const { itemId } = moveBackInvoiceItemToRipInput;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;

    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const invoiceProductItem = await invoiceProductItemRepository.findOne({
        where: { id: itemId },
      });

      if (invoiceProductItem) {
        invoiceProductItem.currentStatusId =
          InvoiceProductStatusEnum.BEGIN_PRODUCTION;

        await invoiceProductItemRepository.save(invoiceProductItem);
        await this.invoiceProductItemInvoiceProductStatusService.attach(
          invoiceProductItem.id,
          invoiceProductItem.currentStatusId,
          userId,
          'انتقال آیتم به ریپ توسط کاربر چاپ',
          manager
        );
      }

      await queryRunner.commitTransaction();
      return {
        message: " 'آیتم انتخاب شده با موفقیت به ریپ برگردانده شد'",
        status: false,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();

      return {
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }

  async updateInvoiceItems(
    context: { req: UserContext },
    updateInvoiceProductItemPrintToHeatInput: UpdateInvoiceProductItemPrintToHeatInput
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const {
      closeRoll,
      deliveryToRepositoryDate,
      completeArr,
      paddingArr,
      printMachineId,
      productionRollId,
    } = updateInvoiceProductItemPrintToHeatInput;
    const printProfileActive = await this.printProfileService.findOne({
      where: { isActive: 1 },
      order: { versionChangeDate: 'DESC' },
    });

    const printProfileActiveId = printProfileActive
      ? printProfileActive.id
      : null;

    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;

    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await invoiceProductItemRepository
        .createQueryBuilder()
        .update(InvoiceProductItem)
        .set({ tagSortOrder: null })
        .whereInIds(completeArr)
        .orWhereInIds(paddingArr)
        .execute();

      // 2) Get items in completeArr
      const invoiceProductItems = await invoiceProductItemRepository.find({
        where: { id: In(completeArr) },
      });

      // 3) Get items in paddingArr with current_status_id = HEAT
      const invoiceProductItemsHeat = await invoiceProductItemRepository.find({
        where: {
          id: In(paddingArr),
          currentStatusId: InvoiceProductStatusEnum.HEAT,
        },
      });

      if (
        invoiceProductItems.length === 0 &&
        invoiceProductItemsHeat.length === 0
      ) {
        await queryRunner.rollbackTransaction();
        return {
          message: 'تغییری در لیست ها انجام نشده است',
          status: false,
        };
      }
      if (!deliveryToRepositoryDate) {
        await queryRunner.rollbackTransaction();
        return {
          message:
            'برای تغییر وضعیت، لطفا تاریخ موعد تحویل به انبار را مشخص نمایید',
          status: false,
        };
      }
      if (productionRollId == 0) {
        await queryRunner.rollbackTransaction();
        return {
          message: 'برای تغییر وضعیت، لطفا کد رول تولید را مشخص نمایید',
          status: false,
        };
      }

      const productionRoll = await this.productionRollService.findOne({
        where: { id: productionRollId },
      });

      let newTagSortOrder = 1;

      for (const item of completeArr) {
        const invoiceProductItem = invoiceProductItems.find(
          (invoiceProductItem) => invoiceProductItem.id === Number(item)
        );
        if (!invoiceProductItem) continue;
        let predictedDate: string | null = null;
        if (deliveryToRepositoryDate) {
          predictedDate = moment(deliveryToRepositoryDate).format(
            'YYYY-MM-DD'
          ) as string;
        }

        if (!invoiceProductItem.predictedDateForReceivedByRepository) {
          invoiceProductItem.predictedDateForReceivedByRepository =
            predictedDate;
        }

        invoiceProductItem.productionRollId = productionRoll
          ? productionRoll.id
          : null;
        invoiceProductItem.rollReferenceCode = productionRoll
          ? productionRoll.rollNumber
          : null;

        invoiceProductItem.tagSortOrder = newTagSortOrder;

        newTagSortOrder++;

        invoiceProductItem.currentStatusId = InvoiceProductStatusEnum.HEAT;
        invoiceProductItem.isPrintedAndHeated = 1;
        invoiceProductItem.printProfileId = printProfileActiveId;
        invoiceProductItem.printMachineId = printMachineId;

        await invoiceProductItemRepository.save(invoiceProductItem);
        await this.invoiceProductItemInvoiceProductStatusService.attach(
          invoiceProductItem.id,
          invoiceProductItem.currentStatusId,
          userId,
          '',
          manager
        );
      }

      for (const item of paddingArr) {
        const invoiceProductItem = invoiceProductItemsHeat.find(
          (invoiceProductItem) => invoiceProductItem.id === Number(item)
        );
        if (!invoiceProductItem) continue;

        if (invoiceProductItem && invoiceProductItem.isTagPrinted == 0) {
          await queryRunner.rollbackTransaction();
          return {
            message: `
            آیتم با کد
          ${invoiceProductItem.code}
           نیاز به چاپ مجدد تگ دارد لطفا به صفحه چاپ مجدد تگ مراجعه نموده و تگ های جدید محصولات را چاپ و سپس نسبت به ادامه فرآیند تولید اقدام نمایید`,
            status: false,
          };
        }
        let predictedDate: string | null = null;
        if (deliveryToRepositoryDate) {
          predictedDate = moment(deliveryToRepositoryDate).format(
            'YYYY-MM-DD'
          ) as string;
        }

        if (!invoiceProductItem.predictedDateForReceivedByRepository) {
          invoiceProductItem.predictedDateForReceivedByRepository =
            predictedDate;
        }

        invoiceProductItem.productionRollId = productionRoll
          ? productionRoll.id
          : null;
        invoiceProductItem.rollReferenceCode = productionRoll
          ? productionRoll.rollNumber
          : null;

        invoiceProductItem.tagSortOrder = newTagSortOrder;

        newTagSortOrder++;

        invoiceProductItem.currentStatusId = InvoiceProductStatusEnum.PRINT;
        invoiceProductItem.printProfileId = printProfileActiveId;

        await invoiceProductItemRepository.save(invoiceProductItem);
        await this.invoiceProductItemInvoiceProductStatusService.attach(
          invoiceProductItem.id,
          invoiceProductItem.currentStatusId,
          userId,
          '',
          manager
        );
      }

      if (closeRoll && productionRoll) {
        productionRoll.isClosed = 1;
        productionRoll.closedBy = userId;
        productionRoll.closeDate = new Date();
        await this.productionRollService.save(productionRoll, manager);
      }
      await queryRunner.commitTransaction();

      return {
        message: 'وضعیت آیتم‌های انتخاب شده با موفقیت تغییر داده شد.',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
