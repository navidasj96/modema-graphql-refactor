import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CancelDepotInvoiceItemInput } from '@/modules/invoice-product-item/dto/cancel-depot-invoice-item.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { DataSource } from 'typeorm';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CancelDepotInvoiceItemProvider {
  constructor(
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject invoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
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

  async cancelDepotInvoiceItem(
    context: { req: UserContext },
    cancelDepotInvoiceItemInput: CancelDepotInvoiceItemInput
  ) {
    const { invoiceProductItemId } = cancelDepotInvoiceItemInput;
    const {
      req: {
        user: { sub: userId },
      },
    } = context;
    //use queryRunner for transaction
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    const invoiceProductItem = await invoiceProductItemRepository.findOne({
      where: { id: invoiceProductItemId },
      relations: {
        invoiceProduct: {
          invoice: { invoiceProducts: true },
          invoiceProductItems: true,
        },
      },
    });
    if (!invoiceProductItem) {
      return {
        message: 'آیتم فاکتور انبار یافت نشد',
        status: false,
      };
    }

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (invoiceProductItem) {
        if (invoiceProductItem.invoiceProduct.invoice.isDepot == 1) {
          const invoiceProduct = invoiceProductItem.invoiceProduct;
          const invoice = invoiceProduct.invoice;
          invoiceProductItem.currentStatusId =
            InvoiceProductStatusEnum.CANCELED;
          await invoiceProductItemRepository.save(invoiceProductItem);
          await this.invoiceProductItemInvoiceProductStatusService.attach(
            invoiceProductItem.id,
            invoiceProductItem.currentStatusId,
            userId,
            'لغو آیتم از صورتحساب دپو',
            manager
          );

          if (
            invoice.invoiceProducts.length === 1 &&
            invoiceProduct.invoiceProductItems.length === 1
          ) {
            await this.invoiceService.save(invoice, manager);
            await this.invoiceInvoiceStatusService.attach(
              invoice.id,
              InvoiceStatusEnum.CANCEL,
              userId,
              'لغو صورتحساب دپو',
              manager
            );
          }
          await queryRunner.commitTransaction();
          return {
            message: 'آیتم انتخاب شده با موفقیت لغو شد',
            status: true,
          };
        } else {
          await queryRunner.rollbackTransaction();
          return {
            message: 'آیتم انتخابی برای دپو نیست و امکان لغو آن وجود ندارد',
            status: false,
          };
        }
      } else {
        await queryRunner.rollbackTransaction();
        return {
          message: 'آیتم انتخاب شده یافت نشد',
          status: false,
        };
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `خطا در لغو آیتم: ${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
