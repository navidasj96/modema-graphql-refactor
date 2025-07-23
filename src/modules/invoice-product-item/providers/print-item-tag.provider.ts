import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { ConfirmTagsPrintedInput } from '@/modules/invoice-product-item/dto/confirm-tags-printed.input';
import { PrintItemTagListInput } from '@/modules/invoice-product-item/dto/print-item-tag-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import {
  INVOICE_STATUSES_AFTER_PRODUCTION_START,
  INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES,
  InvoiceStatusEnum,
} from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

@Injectable()
export class PrintItemTagProvider {
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
     * inject invoiceService
     */
    @Inject(forwardRef(() => InvoiceService))
    private readonly invoiceService: InvoiceService,
    /**
     * inject invoiceInvoiceStatusService
     */
    private readonly invoiceInvoiceStatusService: InvoiceInvoiceStatusService
  ) {}

  async itemsList(printItemTagListInput: PrintItemTagListInput) {
    const { filterType } = printItemTagListInput;
    // Build the base query with joins
    let query = this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')
      .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoice.invoiceAddresses', 'invoiceAddress')
      .innerJoin('invoiceAddress.country', 'country')
      .innerJoin('invoiceAddress.state', 'state')
      .innerJoin('invoiceAddress.city', 'city')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('subproduct.basicCarpetColor', 'basicCarpetColor')
      .innerJoin('invoiceProductItem.currentStatus', 'invoiceProductStatus')
      .leftJoin(
        'InvoiceProductItemInvoiceProductStatus',
        'InvoiceProductItemInvoiceProductStatus',
        'invoiceProductItem.id = InvoiceProductItemInvoiceProductStatus.invoiceProductItemId AND invoiceProductItem.currentStatusId = InvoiceProductItemInvoiceProductStatus.invoiceProductStatusId'
      )
      .where('invoiceProductItem.isTagPrinted = :isTagPrinted', {
        isTagPrinted: 0,
      })
      .andWhere('invoice.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: [INVOICE_STATUSES_AFTER_PRODUCTION_START],
      })
      .groupBy('invoiceProductItem.id');

    // Filter based on invoice type
    if (filterType) {
      switch (filterType) {
        case 1: // ALL
          break;
        case 2: // FROM_DEPOT
          query = query
            .andWhere('invoiceProductItem.fromDepot = :fromDepot', {
              fromDepot: 1,
            })
            .andWhere('invoiceProductItem.isReversed = :isReversed', {
              isReversed: 0,
            });
          break;
        case 3: // DAMAGED
          query = query.andWhere(
            'substring(invoiceProductItem.code, 1, 1) = :code',
            { code: 'm' }
          );
          break;
        case 4: // REVERSED_ITEMS
          query = query.andWhere(
            'invoiceProductItem.isReversed = :isReversed',
            { isReversed: 1 }
          );
          break;
      }
    }
    const invoiceProduct = await query.getMany();
    // Execute the query
    return invoiceProduct;
  }

  async confirmTagsPrinted(
    context: { req: UserContext },
    confirmTagsPrintedInput: ConfirmTagsPrintedInput
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;
    const { invoiceProductItemIds } = confirmTagsPrintedInput;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;

    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);
    const invoiceProductItems = await this.invoiceProductItemRepository.find({
      where: { id: In(invoiceProductItemIds) },
      order: { updatedAt: 'DESC' },
      relations: {
        invoiceProduct: {
          invoice: {
            invoiceAddresses: {
              state: true,
              city: true,
            },
            invoiceProducts: { invoiceProductItems: true },
          },
          product: { image: true },
          subproduct: {
            image: true,
            basicCarpetSize: true,
            basicCarpetColor: true,
          },
        },
        invoiceProductItemInvoiceProductStatuses: {
          invoiceProductStatus: true,
        },
      },
    });

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const invoiceProductItem of invoiceProductItems) {
        invoiceProductItem.isTagPrinted = 1;
        await invoiceProductItemRepository.save(invoiceProductItem);

        const invoiceProduct = invoiceProductItem.invoiceProduct;
        const invoice = invoiceProduct.invoice;
        const otherInvoiceProducts = invoice.invoiceProducts;

        let allItemsAreReady = true;
        if (invoice.currentInvoiceStatusId === InvoiceStatusEnum.CANCEL) {
          allItemsAreReady = false;
        } else {
          for (const otherInvoiceProduct of otherInvoiceProducts) {
            const otherInvoiceProductItems =
              otherInvoiceProduct.invoiceProductItems;
            for (const otherInvoiceProductItem of otherInvoiceProductItems) {
              if (
                otherInvoiceProductItem.fromDepot === 1 &&
                otherInvoiceProductItem.isTagPrinted !== 1
              ) {
                allItemsAreReady = false;
              } else if (
                otherInvoiceProductItem.fromDepot === 0 &&
                (otherInvoiceProductItem.currentStatusId ==
                  InvoiceProductStatusEnum.BEGIN_PRODUCTION ||
                  otherInvoiceProductItem.currentStatusId ==
                    InvoiceProductStatusEnum.HEAT ||
                  otherInvoiceProductItem.currentStatusId ==
                    InvoiceProductStatusEnum.PRINT_QUALITY_CONTROL ||
                  otherInvoiceProductItem.currentStatusId ==
                    InvoiceProductStatusEnum.CUTTING ||
                  otherInvoiceProductItem.currentStatusId ==
                    InvoiceProductStatusEnum.EDGE_OVERCASTING ||
                  otherInvoiceProductItem.currentStatusId ==
                    InvoiceProductStatusEnum.PRODUCTION_COMPLETED)
              ) {
                allItemsAreReady = false;
              }
            }
          }
        }
        if (allItemsAreReady) {
          if (
            INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES.includes(
              invoice.currentInvoiceStatusId
            )
          ) {
            invoice.currentInvoiceStatusId =
              InvoiceStatusEnum.PRODUCTION_COMPLETED;
            await this.invoiceService.save(invoice, manager);
            const comment =
              'انتقال صورتحساب به مرحله "تکمیل تولید" به دلیل اینکه تمام موارد جهت تولید، تکمیل شده و تمام مواردی که باید از دپو بیایند چاپ تگ آنها صورت گرفته است.';
            await this.invoiceInvoiceStatusService.attach(
              invoice.id,
              invoice.currentInvoiceStatusId,
              userId,
              comment,
              manager
            );
          }
        }
      }
      await queryRunner.commitTransaction();
      return {
        message: 'تایید چاپ تگ موارد انتخابی با موفقیت انجام شد',
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
