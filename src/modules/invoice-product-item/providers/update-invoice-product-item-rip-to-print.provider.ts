import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { UpdateInvoiceProductItemRipToPrintInput } from '@/modules/invoice-product-item/dto/update-invoice-product-item-rip-to-print.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { PrintProfileService } from '@/modules/print-profile/print-profile.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';

@Injectable()
export class UpdateInvoiceProductItemRipToPrintProvider {
  constructor(
    /**
     * inject authService
     */
    private readonly authService: AuthService,
    /**
     * inject printProfileService
     */
    private readonly printProfileService: PrintProfileService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject invoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService
  ) {}

  async updateInvoiceProductItemRipToPrint(
    context: { req: UserContext },
    updateInvoiceProductItemRipToPrintInput: UpdateInvoiceProductItemRipToPrintInput
  ) {
    const { printRipId, completeArr } = updateInvoiceProductItemRipToPrintInput;
    const {
      user: { sub: userId },
    } = context.req;
    const userCanUpdateRipToPrint = await this.authService.userPermissionCheck(
      [
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_AND_HEAT,
      ],
      context
    );

    if (!userCanUpdateRipToPrint) {
      return {
        message: 'شما دسترسی لازم برای ویرایش رپورتاژ را ندارید',
        status: false,
      };
    }

    if (printRipId == 0) {
      return {
        message: 'برای تغییر وضعیت، لطفا شماره ریپ را مشخص نمایید',
        status: false,
      };
    }

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
      await invoiceProductItemRepository.update(
        { id: In(completeArr) },
        { sortOrder: null }
      );

      await invoiceProductItemRepository.update(
        { printRipId },
        {
          sortOrder: null,
          printRipId: null,
          printProfileId: printProfileActiveId,
          currentStatusId: InvoiceProductStatusEnum.BEGIN_PRODUCTION, // use enum here
        }
      );

      const invoiceProductItems = await invoiceProductItemRepository.find({
        where: { id: In(completeArr) },
      });
      let newSortOrder = 1;
      for (const item of completeArr) {
        const invoiceProductItem = invoiceProductItems.find(
          (invoiceProductItem) => invoiceProductItem.id === item
        );
        if (!invoiceProductItem) continue;
        invoiceProductItem.printRipId = printRipId;
        invoiceProductItem.sortOrder = newSortOrder;
        newSortOrder++;
        const previousStatusId = invoiceProductItem.currentStatusId;
        invoiceProductItem.currentStatusId = InvoiceProductStatusEnum.PRINT; // use enum here
        invoiceProductItem.printProfileId = printProfileActiveId;

        if (previousStatusId !== InvoiceProductStatusEnum.PRINT) {
          await this.invoiceProductItemInvoiceProductStatusService.attach(
            invoiceProductItem.id,
            invoiceProductItem.currentStatusId,
            userId,
            '',
            manager
          );
        }
        await invoiceProductItemRepository.save(invoiceProductItem);
      }
      await queryRunner.commitTransaction();
      return {
        message: '  با موفقیت بروزرسانی شد',
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
