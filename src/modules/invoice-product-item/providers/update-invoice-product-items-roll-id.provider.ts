import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdateInvocieProductItemsRollIdInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items-roll-id.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

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
    private readonly productionRollService: ProductionRollService
  ) {}

  async updateInvoiceProductItemsRollId(
    context: { req: UserContext },
    updateInvocieProductItemsRollIdInput: UpdateInvocieProductItemsRollIdInput
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
    const productionRollId =
      updateInvocieProductItemsRollIdInput.productionRollId;
    const ids = updateInvocieProductItemsRollIdInput.ids;
    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });
    const invoiceProductItems = await this.invoiceProductItemRepository.find({
      where: { id: In(ids) },
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

      try {
        await this.invoiceProductItemRepository.save(invoiceProductItem);
      } catch {
        return {
          message:
            'مشکلی در تغییر کد رول تولید موارد انتخابی بوجود آمد. لطفا دوباره امتحان نمایید.',
          status: false,
        };
      }
    }
    return {
      message: 'کد رول تولید موارد انتخابی با موفقیت تغییر داده شد',
      status: true,
    };
  }
}
