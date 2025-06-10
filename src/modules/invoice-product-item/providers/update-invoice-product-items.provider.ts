import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { UpdateInvoiceProductItemsInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.input.dto';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { PermissionsToChangeInvoiceProductItemStatusProvider } from '@/modules/invoice-product-item/providers/permissions-to-change-invoice-product-item-status.provider';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { PrintProfileService } from '@/modules/print-profile/print-profile.service';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { SettingService } from '@/modules/setting/setting.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stat } from 'fs';
import { DataSource, In, Repository } from 'typeorm';

@Injectable()
export class UpdateInvoiceProductItemsProvider {
  constructor(
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject authService
     */
    private readonly authService: AuthService,
    /**
     * inject printProfileService
     */
    private readonly printProfileService: PrintProfileService,
    /**
     * inject permissionsToChangeInvoiceProductItemStatusProvider
     */
    private readonly permissionsToChangeInvoiceProductItemStatusProvider: PermissionsToChangeInvoiceProductItemStatusProvider,
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
     * inject produtionRollService
     */
    private readonly productionRollService: ProductionRollService,
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
  async updateInvoiceProductItems(
    context: { req: UserContext },
    updateInvoiceItemsInput: UpdateInvoiceProductItemsInput
  ) {
    const { req } = context;
    const { user } = req;
    const { sub: userId } = user;
    const {
      ids,
      selectedStatus: status,
      deliverToRepositoryDate,
    } = updateInvoiceItemsInput;

    //use typeorm queryRunner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const manager = queryRunner.manager;
    const invoiceProductItemRepositoryWithQuerryRunner =
      queryRunner.manager.getRepository(InvoiceProductItem);
    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );
    const { permissions, roles } = userPermissions;

    const settings = await this.settingService.activeSetting();
    const printProfileActive = await this.printProfileService.findOne({
      where: { isActive: 1 },
      order: { versionChangeDate: 'DESC' },
    });
    let printProfileActiveId = printProfileActive
      ? printProfileActive.id
      : null;

    const statusesToChange =
      await this.permissionsToChangeInvoiceProductItemStatusProvider.PermissionsToChangeInvoiceProductItemStatus(
        permissions
      );
    if (!statusesToChange.includes(status)) {
      return {
        message: 'اجازه تغییر به این وضعیت را ندارید',
        status: false,
      };
    }

    const invoiceProductItems = await this.invoiceProductItemRepository.find({
      where: { id: In(ids) },
      relations: {
        invoiceProduct: {
          invoice: true,
          product: true,
        },
      },
    });

    for (const invoiceProductItem of invoiceProductItems) {
      if (
        invoiceProductItem.currentStatusId > InvoiceProductStatusEnum.HEAT &&
        invoiceProductItem.isTagPrinted == 0
      ) {
        return {
          message:
            'یکی از آیتم های انتخابی نیاز به چاپ مجدد تگ دارند لطفا به صفحه چاپ مجدد تگ مراجعه نموده و تگ های جدید محصولات را چاپ و سپس نسبت به ادامه فرآیند تولید اقدام نمایی',
          status: false,
        };
      }
    }

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const invoiceProductItem of invoiceProductItems) {
        const invoiceProduct = invoiceProductItem.invoiceProduct;
        const invoice = invoiceProduct.invoice;
        const product = invoiceProduct.product;
        const date = deliverToRepositoryDate;
        const formattedDate = date ? date.split('T')[0] : null;
        console.log('formattedDate', deliverToRepositoryDate);
        if (status == InvoiceProductStatusEnum.PRINT && product.isShaggy == 0) {
          if (deliverToRepositoryDate == '') {
            await queryRunner.rollbackTransaction();
            return {
              message:
                'لطفا برای ارسال به چاپ و هیت تاریخ موعد تحویل به انبار را مشخص نمایید',
              status: false,
            };
          } else {
            if (
              deliverToRepositoryDate &&
              formattedDate &&
              !invoiceProductItem.predictedDateForReceivedByRepository
            ) {
              invoiceProductItem.predictedDateForReceivedByRepository =
                formattedDate;
            }
          }

          const productionRoll =
            settings && settings.productionRollId
              ? await this.productionRollService.findOne({
                  where: { id: settings.productionRollId },
                })
              : null;

          invoiceProductItem.productionRollId = settings?.productionRollId;
          invoiceProductItem.rollReferenceCode = productionRoll?.rollNumber;
        } else if (
          status == InvoiceProductStatusEnum.CUTTING &&
          product.isShaggy == 1
        ) {
          if (deliverToRepositoryDate == '') {
            await queryRunner.rollbackTransaction();
            return {
              message:
                'لطفا برای ارسال به برش تاریخ موعد تحویل به انبار را مشخص نمایید',
              status: false,
            };
          } else {
            if (
              deliverToRepositoryDate &&
              formattedDate &&
              !invoiceProductItem.predictedDateForReceivedByRepository
            ) {
              invoiceProductItem.predictedDateForReceivedByRepository =
                formattedDate;
            }
          }
          printProfileActiveId = null;
        }
        invoiceProductItem.currentStatusId = status;
        invoiceProductItem.isPrintedAndHeated = 1;
        invoiceProductItem.printProfileId = printProfileActiveId;
        // console.log('invoiceProductItem', invoiceProductItem);
        await invoiceProductItemRepositoryWithQuerryRunner.save(
          invoiceProductItem
        );
        await this.invoiceProductItemInvoiceProductStatusService.attach(
          invoiceProductItem.id,
          invoiceProductItem.currentStatusId,
          userId,
          '',
          manager
        );
        if (
          status == InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT
        ) {
          let productionCompleted = true;
          const otherInvoiceProducts = invoice.invoiceProducts;

          for (const otherInvoiceProduct of otherInvoiceProducts) {
            const otherInvoiceProductItems =
              otherInvoiceProduct.invoiceProductItems;

            for (const otherInvoiceProductItem of otherInvoiceProductItems) {
              if (
                otherInvoiceProductItem.currentStatusId ==
                InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT
              ) {
                productionCompleted = false;
              }

              if (otherInvoiceProductItem.isTagPrinted == 0) {
                productionCompleted = false;
              }
            }
          }

          if (productionCompleted) {
            if (
              invoice.currentInvoiceStatusId ==
              InvoiceStatusEnum.PREPARING_PRODUCTS
            ) {
              invoice.currentInvoiceStatusId =
                InvoiceStatusEnum.PRODUCTION_COMPLETED;
              await this.invoiceService.save(invoice, manager);
              const comment =
                'Changed by system, after all Invoice Product Items has been produced successfully';

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
      }

      await queryRunner.commitTransaction();
      return {
        message: 'وضعیت آیتم های انتخاب شده با موفقیت تغییر داده شد.',
        status: true,
      };
    } catch (error) {
      console.log('error', error);
      await queryRunner.rollbackTransaction();
      return {
        message: 'خطا در به روز رسانی آیتم های فاکتور',
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
