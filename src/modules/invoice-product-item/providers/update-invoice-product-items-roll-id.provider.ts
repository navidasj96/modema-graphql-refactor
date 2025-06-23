import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdateInvoiceProductItemsRollIdInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items-roll-id.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

@Injectable()
export class UpdateInvoiceProductItemsRollIdProvider {
  constructor(
    /**
     * inject authService
     */
    private readonly authService: AuthService,
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,
    /**
     * inject productionRollService
     */
    private readonly productionRollService: ProductionRollService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
  ) {}

  async updateInvoiceProductItemsRollId(
    context: { req: UserContext },
    updateInvoiceProductItemsRollIdInput: UpdateInvoiceProductItemsRollIdInput
  ) {
    const userHasPermission = await this.authService.userPermissionCheck(
      ['edit roll reference code'],
      context
    );

    if (!userHasPermission) {
      return {
        message: 'شما دسترسی های لازم برای تغییر کد رول را ندارید',
        status: false,
      };
    }

    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    const productionRollId =
      updateInvoiceProductItemsRollIdInput.productionRollId;
    const ids = updateInvoiceProductItemsRollIdInput.ids;
    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const invoiceProductItems = await invoiceProductItemRepository.find({
        where: { id: In(ids) },
        relations: { invoiceProduct: { product: true } },
      });

      for (const invoiceProductItem of invoiceProductItems) {
        const invoiceProduct = invoiceProductItem.invoiceProduct;
        const product = invoiceProduct.product;
        if (
          (product.isShaggy == 1 && !productionRoll?.isShaggy) ||
          (!product.isShaggy && productionRoll?.isShaggy)
        ) {
          return {
            message:
              'آیتم های شگی را تنها می‌توانید به رول های مربوط به شگی ارتباط دهید',
            status: false,
          };
        }
        invoiceProductItem.productionRollId = productionRollId;
        invoiceProductItem.rollReferenceCode = productionRoll?.rollNumber;

        await invoiceProductItemRepository.save(invoiceProductItem);
      }
      await queryRunner.commitTransaction();
      return {
        message: 'کد رول تولید موارد انتخابی با موفقیت تغییر داده شد',
        status: true,
      };
    } catch (error) {
      console.log('error', error);
      await queryRunner.rollbackTransaction();
      return {
        message: 'خطا در تغییر کد رول تولید موارد انتخابی',
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
