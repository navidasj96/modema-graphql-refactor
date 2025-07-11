import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductItemRipToPrintInput } from '@/modules/invoice-product/dto/invoice-product-items-rip-to-print.input';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceProductItemsRipToPrintListProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,
    /**
     * inject authService
     */
    private readonly authService: AuthService
  ) {}

  async invoiceProductItemsRipToPrintList(
    context: { req: UserContext },
    invoiceProductItemsListInput: InvoiceProductItemRipToPrintInput
  ) {
    const { printRipId } = invoiceProductItemsListInput;
    const userCanViewInvoiceProductItems =
      await this.authService.userPermissionCheck(
        [
          InvoiceProductItemPermissions.PERMISSION_TO_VIEW,
          InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_BEGIN_PRODUCTION,
          InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRINT_AND_HEAT,
          InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_AND_HEAT,
        ],
        context
      );

    if (!userCanViewInvoiceProductItems) {
      return {
        message: 'شما دسترسی لازم برای مشاهده آیتم ها را ندارید',
        status: false,
      };
    }

    const invoiceProductItemsQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select(['ipi'])
      .innerJoin('ipi.invoiceProduct', 'ip')
      .innerJoin('ip.invoice', 'inv')
      .innerJoin('ip.product', 'prod')
      .where('inv.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere('ipi.currentStatusId = :status', {
        status: InvoiceProductStatusEnum.BEGIN_PRODUCTION,
      })
      .andWhere('prod.isShaggy = :isShaggy', { isShaggy: 0 })
      .orderBy('inv.issueDate', 'DESC')
      .addOrderBy('ipi.sortOrder', 'ASC');

    if (printRipId) {
      invoiceProductItemsQuery.andWhere('ipi.printRipId = :printRipId', {
        printRipId,
      });
    }
    const invoiceProductItems = await invoiceProductItemsQuery.getMany();

    return invoiceProductItems;
  }
}
