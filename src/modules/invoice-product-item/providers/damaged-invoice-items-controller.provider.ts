import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { SubmitInvoiceProductDamageInput } from '@/modules/invoice-product-item/dto/submit-invoice-product-damage.input';
import { InvoiceItemDamageTypes } from '@/utils/invoice-product-item-damage-types';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { DataSource } from 'typeorm';

@Injectable()
export class DamagedInvoiceItemsControllerProvider {
  constructor(
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
  ) {}

  private damageCause: null | string = null;
  private damageType: null | number = null;
  private newProducts: any;
  async submitDamagedInvoiceItems(
    context: { req: UserContext },
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    const hasPermissionToSubmitDamages =
      await this.authService.userPermissionCheck(
        [
          InvoiceProductItemPermissions.PERMISSION_TO_SUBMIT_DAMAGED_INVOICE_ITEMS,
        ],
        context
      );

    if (!hasPermissionToSubmitDamages) {
      throw new GraphQLError(
        'You do not have permission to submit damaged invoice items.'
      );
    }
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
  }

  private validateFields(
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    if (
      !submitInvoiceProductDamageInput.damageCause ||
      submitInvoiceProductDamageInput.damageCause == ''
    ) {
      return {
        message: 'لطفا دلیل اعلام معیوبی کالا را بطور خلاصه وارد نمایید',
        status: false,
      };
    } else {
      this.damageCause = submitInvoiceProductDamageInput.damageCause;
    }

    if (
      !submitInvoiceProductDamageInput.damageType ||
      ![
        InvoiceItemDamageTypes.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES,
        InvoiceItemDamageTypes.DAMAGE_TYPE_COMPLETELY_DAMAGED,
      ].includes(submitInvoiceProductDamageInput.damageType)
    ) {
      return {
        message: 'لطفا نوع معیوب شدن کالا را انتخاب نمایید',
        status: false,
      };
    } else {
      this.damageType = submitInvoiceProductDamageInput.damageType;
    }

    if (
      submitInvoiceProductDamageInput.damageType ==
      InvoiceItemDamageTypes.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES
    ) {
      const newProducts = submitInvoiceProductDamageInput.newProducts;
      if (!newProducts) {
        return {
          message:
            'لطفا در صورت تولید محصول جدید از کالای معیوب شده، حداقل یک محصول جدید را انتخاب نمایید',
          status: false,
        };
      }
    }
  }
}
