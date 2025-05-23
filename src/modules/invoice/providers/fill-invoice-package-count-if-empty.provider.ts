import { Injectable } from '@nestjs/common';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { SettingService } from '@/modules/setting/setting.service';

@Injectable()
export class FillInvoicePackageCountIfEmptyProvider {
  constructor(
    /**
     * inject settingService
     */
    private readonly settingService: SettingService
  ) {}

  async fillInvoicePackageCountIfEmpty(invoice: Invoice) {
    const invoiceProducts = invoice.invoiceProducts;
    const setting = await this.settingService.activeSetting();
    let totalVolume = 0;
    let weight = 0;

    // برای صدا زدن API ثبت بسته در چاپار، باید وزن هر محصول خریداری شده توسط مشتری محاسبه شود
    // همچنین مقدار carpet_volume و pad_volume بر اساس حجم تقریبی هر سایز فرش برای قرار گرفتن در جعبه محاسبه می شود
    // تا تعداد جعبه های لازم برای بسته بندی بطور تقریبی محاسبه شود (حجم کل هر جعبه طبق پارامتر(box_capacity) در settings برابر 6 قرار داده شده)

    for (const invoiceProduct of invoiceProducts) {
      let packageWeight = 0;
      const area =
        invoiceProduct.subproduct.basicCarpetSize.width *
        invoiceProduct.subproduct.basicCarpetSize.length;
      const count = invoiceProduct.count;
      let volume = 0;
      if (
        invoiceProduct.product.isCarpetPad == 0 &&
        setting &&
        setting.weightPerMeter
      ) {
        volume = invoiceProduct.subproduct.basicCarpetSize.carpetVolume || 0;
        packageWeight = area * setting.weightPerMeter * invoiceProduct.count;
      } else if (
        invoiceProduct.product.isCarpetPad == 1 &&
        setting &&
        setting.padWeightPerMeter
      ) {
        volume = invoiceProduct.subproduct.basicCarpetSize.padVolume || 0;
        packageWeight = area * setting.padWeightPerMeter * invoiceProduct.count;
      }
      totalVolume = volume * count;
      weight = packageWeight;
    }

    // تعداد جعبه ها = مقدار حجم کل آیتم های خریداری شده، تقسیم بر حجم استاندارد هر جعبه(در حال حاضر = 6) بصورت رُند شده ی عدد صحیح رو به بالا
    let assignedPieces = 0;

    //todo : check the functionality of this part and if its necessary
    if (setting && setting.boxCapacity) {
      assignedPieces = Math.ceil(totalVolume / setting.boxCapacity);
      if (invoice.packageCount) {
        invoice.packageCount = assignedPieces;
      }
    }

    return {
      status: true,
      assignedPieces,
      weight,
      totalVolume,
    };
  }
}
